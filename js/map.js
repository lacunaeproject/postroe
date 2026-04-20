/* Render the US map with D3 + us-atlas TopoJSON.
   Uses Albers USA projection (Alaska + Hawaii composited inside CONUS bounds). */

const STATE_NAME_TO_CODE = {
  'Alabama': 'AL', 'Alaska': 'AK', 'Arizona': 'AZ', 'Arkansas': 'AR',
  'California': 'CA', 'Colorado': 'CO', 'Connecticut': 'CT', 'Delaware': 'DE',
  'District of Columbia': 'DC', 'Florida': 'FL', 'Georgia': 'GA', 'Hawaii': 'HI',
  'Idaho': 'ID', 'Illinois': 'IL', 'Indiana': 'IN', 'Iowa': 'IA',
  'Kansas': 'KS', 'Kentucky': 'KY', 'Louisiana': 'LA', 'Maine': 'ME',
  'Maryland': 'MD', 'Massachusetts': 'MA', 'Michigan': 'MI', 'Minnesota': 'MN',
  'Mississippi': 'MS', 'Missouri': 'MO', 'Montana': 'MT', 'Nebraska': 'NE',
  'Nevada': 'NV', 'New Hampshire': 'NH', 'New Jersey': 'NJ', 'New Mexico': 'NM',
  'New York': 'NY', 'North Carolina': 'NC', 'North Dakota': 'ND', 'Ohio': 'OH',
  'Oklahoma': 'OK', 'Oregon': 'OR', 'Pennsylvania': 'PA', 'Rhode Island': 'RI',
  'South Carolina': 'SC', 'South Dakota': 'SD', 'Tennessee': 'TN', 'Texas': 'TX',
  'Utah': 'UT', 'Vermont': 'VT', 'Virginia': 'VA', 'Washington': 'WA',
  'West Virginia': 'WV', 'Wisconsin': 'WI', 'Wyoming': 'WY'
};

(async function () {
  const svg = document.getElementById('us-map');
  if (!svg || typeof d3 === 'undefined' || typeof topojson === 'undefined') return;

  // Clear any previous paths
  svg.innerHTML = '';

  // Prefer the inlined atlas so the page works from file:// (local downloads).
  // Fall back to fetch only if the inline global is missing.
  const topo = window.US_ATLAS || await d3.json('data/us-states.json');
  const features = topojson.feature(topo, topo.objects.states).features;

  const W = 975, H = 610;
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  const projection = d3.geoAlbersUsa().scale(1280).translate([W / 2, H / 2]);
  const path = d3.geoPath(projection);

  const statusColor = {
    banned: 'var(--color-their)',
    limited: 'var(--color-our)',
    gestational: 'var(--color-truth)',
    protected: 'var(--color-sage)'
  };

  const statesData = window.POSTROE_STATES || {};

  features.forEach((f) => {
    const name = f.properties.name;
    const code = STATE_NAME_TO_CODE[name];
    if (!code) return;
    const data = statesData[code];
    if (!data) return;

    const el = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    el.setAttribute('d', path(f));
    el.setAttribute('fill', statusColor[data.status]);
    el.setAttribute('data-state', code);
    el.setAttribute('role', 'button');
    el.setAttribute('tabindex', '0');
    el.setAttribute('aria-label', `${data.name}: ${data.status}`);
    // add a simple title tooltip
    const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
    title.textContent = `${data.name} — ${data.status}`;
    el.appendChild(title);
    svg.appendChild(el);
  });

  // set default state
  const defaultCode = 'TX';
  const defaultPath = svg.querySelector(`[data-state="${defaultCode}"]`);
  if (defaultPath) defaultPath.classList.add('is-active');

  svg.addEventListener('click', (e) => {
    const t = e.target.closest('[data-state]');
    if (!t) return;
    svg.querySelectorAll('.is-active').forEach((n) => n.classList.remove('is-active'));
    t.classList.add('is-active');
    window.updateStateDetail && window.updateStateDetail(t.dataset.state);
  });

  svg.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const t = e.target.closest('[data-state]');
    if (!t) return;
    e.preventDefault();
    svg.querySelectorAll('.is-active').forEach((n) => n.classList.remove('is-active'));
    t.classList.add('is-active');
    window.updateStateDetail && window.updateStateDetail(t.dataset.state);
  });
})();
