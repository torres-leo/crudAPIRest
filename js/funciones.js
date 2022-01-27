export function mostrarAlerta(mensaje) {
	const alerta = document.querySelector('.alerta');

	if (!alerta) {
		const alerta = document.createElement('p');
		alerta.classList.add(
			'bg-red-600',
			'border-red-4',
			'text-white',
			'px-4',
			'py-3',
			'rounded',
			'max-w.lg',
			'mx-auto',
			'mt-6',
			'text-center',
			'alerta'
		);

		alerta.innerHTML = `
            <strong class="font-bold">Error</strong>
			<br>
            <span class="block sm:inline">${mensaje}</span>
        `;

		const formulario = document.querySelector('#formulario');
		formulario.appendChild(alerta);

		setTimeout(() => {
			alerta.remove();
		}, 3000);
	}
}

export function validar(cliente) {
	return !Object.values(cliente).every((input) => input !== '');
}
