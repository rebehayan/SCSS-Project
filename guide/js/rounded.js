const buildRoundList = () => {
  const ul = document.querySelector('.rounds');
  if (!ul) return;

  const probe = document.createElement('div');
  Object.assign(probe.style, {
    width: '40px',
    height: '40px',
    position: 'absolute',
    visibility: 'hidden',
    pointerEvents: 'none',
  });
  document.body.appendChild(probe);

  ul.innerHTML = '';
  const frag = document.createDocumentFragment();

  for (let i = 1; i <= 999; i++) {
    probe.className = '';
    probe.classList.add(`rounded-${i}`);

    const r = getComputedStyle(probe).borderTopLeftRadius;
    const px = parseFloat(r);
    if (!px) continue;

    const li = document.createElement('li');
    li.classList.add(`rounded-${i}`);
    li.textContent = `.rounded-${i}`;
    frag.appendChild(li);
  }

  ul.appendChild(frag);
  ul.insertAdjacentElement('beforeend', '<li class="rounded-full">.rounded-full</li>');
  document.body.removeChild(probe);
};

buildRoundList();
