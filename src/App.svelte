<script>
	import mobile_image from "./assets/images/illustration-sign-up-mobile.svg";
	import desktop_image from "./assets/images/illustration-sign-up-desktop.svg";
	import icon_list from "./assets/images/icon-list.svg";
	import icon_success from "./assets/images/icon-success.svg";
	import Success from "./Success.svelte";

	let email = "";
	let invalidEmail = false;
	let showSuccess = false;

	function validateEmail() {
		const regex = new RegExp(/^[A-Za-z0-9_.-]+@[A-Za-z0-9.-]+$/, "gm");
		invalidEmail = !regex.test(email);
	}
</script>

<main class="font-roboto relative bg-charcoal_grey min-h-screen md:grid place-content-center">
	<article class="bg-white relative items-center justify-center md:(flex rounded-2xl max-h-[75vh])">
		<Success />
		<div class="md:(order-1 p-5) h-full">
			<picture>
				<source media="(min-width:768px)" srcset={desktop_image} />
				<source media="(min-width:375px)" srcset={mobile_image} />
				<img src={mobile_image} alt="" class="md:h-full" />
			</picture>
		</div>

		<section class="p-5">
			<h1 class="text-dark_slate_grey text-3xl font-bold mb-3">Stay updated!</h1>
			<p class="mb-5 text-charcoal_grey">Join 60,000+ product managers receiving monthly updates on:</p>

			<ul class="grid gap-4 text-charcoal_grey">
				<li class="flex items-center gap-2">
					<img src={icon_list} alt="" class="self-start" />
					<span> Product discovery and building what matters</span>
				</li>
				<li class="flex items-center gap-2">
					<img src={icon_list} alt="" class="self-start" />
					<span> Measuring to ensure updates are a success</span>
				</li>
				<li class="flex items-center gap-2">
					<img src={icon_list} alt="" class="self-start" /> <span> And much more!</span>
				</li>
			</ul>

			<form action="" method="get" class="mt-5">
				<label for="email" class="block mb-4">
					<p class="font-bold text-sm flex items-center justify-between">
						<span class="text-dark_slate_grey mb-1">Email address</span>
						{#if invalidEmail && email}
							<span class="text-tomato">valid email required</span>
						{/if}
					</p>
					<input
						type="text"
						name="email"
						id="email"
						bind:value={email}
						on:input={validateEmail}
						placeholder="email@company.com"
						class="border border-grey w-full rounded px-4 py-3 focus:outline-grey text-charcoal_grey"
					/>
				</label>

				<button
					class="bg-dark_slate_grey w-full block rounded-md py-4 text-sm font-bold text-white mx-auto hover:bg-tomato"
					on:click={() => (showSuccess = !showSuccess)}
				>
					Subscribe to monthly newsletter
				</button>
			</form>
		</section>
	</article>
</main>
