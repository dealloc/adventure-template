export default class CustomJournalTextPageSheet extends foundry.applications
	.sheets.journal.JournalEntryPageProseMirrorSheet {
	protected _insertElement(element: HTMLElement): void {
		super._insertElement(element);

		element.querySelectorAll(".narrate").forEach((narrate) => {
			narrate.addEventListener("click", this.#narrate);
		});

		element
			.querySelectorAll('[data-id][data-type="Scene"]')
			.forEach((scene) => {
				scene.addEventListener("click", this.#openScene);
			});

		this.#updateImages(element);
		this.#updateSounds(element);
	}

	async #narrate() {
		const content = $(this).html();
		const players = ChatMessage.getWhisperRecipients("players");

		ui.notifications.info("Sending narrate block to players");
		for (const player of players) {
			ChatMessage.create({
				content: content,
				whisper: player.id,
			} as any);
		}
	}

	#openScene(event: Event) {
		event.preventDefault();
		event.stopPropagation();

		const id: string = (event as any).currentTarget.dataset.id;
		const scene = (game as ReadyGame).scenes.get(id);

		if (scene) {
			(scene as any).view();
		}
	}

	// Automatically add 'shape-outside' to all images with '.outside' classes.
	#updateImages(element: HTMLElement) {
		element.querySelectorAll("img.outside").forEach((img: Element) => {
			const src = img.getAttribute("src");

			(img as HTMLElement).style.shapeOutside = `url('${src}')`;
		});
	}

	// Automatically update ambient sound links to have the music icon similar to rolls etc and make them clickable to toggle the sound linked.
	#updateSounds(element: HTMLElement) {
		element
			.querySelectorAll('[data-id][data-type="AmbientSound"]')
			.forEach((link: Element) => {
				const id = (link as HTMLElement).dataset.id;
				const sound = (game as ReadyGame).canvas.sounds.get(id);

				if (sound) {
					const icon = sound.document.hidden ? "play" : "stop";
					link.innerHTML = `<i class="fas fa-${icon}"></i> ${$(link).text()}`;

					link.addEventListener("click", async (event) => {
						event.preventDefault();
						event.stopPropagation();

						await (sound as any).document.update({
							hidden: !sound.document.hidden,
						});
						const icon = sound.document.hidden ? "play" : "stop";
						link.innerHTML = `<i class="fas fa-${icon}"></i> ${$(link).text()}`;
					});
				}
			});
	}
}
