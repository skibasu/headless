<template>
	<section
		class="block block-contact-form"
		:style="'background-image : url(' + acfProps.bcontact_background + ')'"
	>
		<div class="container">
			<h2 class="block-title">{{ acfProps.form_title }}</h2>
			<div class="row block-contact-form__row">
				<div
					class="col block-contact-form__col"
					v-for="elem in acfProps.contact_information"
					:key="elem.namex"
				>
					<figure
						class="info-picture"
						v-if="elem.information_block_icon"
					>
						<img :src="elem.information_block_icon" alt="icon" />
					</figure>
					<h3 class="info-title">
						{{ elem.information_block_title }}
					</h3>
					<p class="info-text">
						{{ elem.information_bloc_description }}
					</p>
				</div>
			</div>
			<client-only>
				<ValidationObserver v-slot="{ handleSubmit, reset }">
					<form
						class="contact-form"
						v-if="acfProps.show_contact_form"
						@submit.prevent="handleSubmit(() => onSubmit(reset))"
					>
						<div class="contact-form__input-wrapper col">
							<ValidationProvider
								name="Name"
								rules="required"
								v-slot="{ errors }"
							>
								<input
									type="text"
									id="f_namex"
									v-model="formData.namex"
									name="namex"
									placeholder="Name*"
									@focus="onFocus"
								/>
								<p class="contact-form__error">
									<span>{{ errors[0] }}</span>
								</p>
							</ValidationProvider>
						</div>

						<div class="contact-form__input-wrapper col">
							<ValidationProvider
								name="E-mail"
								rules="required|email"
								v-slot="{ errors }"
							>
								<input
									id="email"
									v-model="formData.email"
									name="f_email"
									placeholder="Email*"
									@focus="onFocus"
								/>
								<p class="contact-form__error">
									<span>{{ errors[0] }}</span>
								</p>
							</ValidationProvider>
						</div>

						<div class="contact-form__input-wrapper col">
							<ValidationProvider
								name="Website"
								:rules="{
									regex: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
								}"
								v-slot="{ errors }"
							>
								<input
									type="text"
									id="f_website"
									name="website"
									v-model="formData.website"
									placeholder="Website"
									@focus="onFocus"
								/>
								<p class="contact-form__error">
									<span>{{ errors[0] }}</span>
								</p>
							</ValidationProvider>
						</div>

						<div class="contact-form__input-wrapper col">
							<ValidationProvider
								name="Message"
								rules="required"
								v-slot="{ errors }"
								@focus="onFocus"
							>
								<textarea
									id="f_message"
									name="message"
									v-model="formData.message"
									placeholder="Message*"
								></textarea>
								<p class="contact-form__error">
									<span>{{ errors[0] }}</span>
								</p>
							</ValidationProvider>
						</div>

						<div class="contact-form__input-wrapper col">
							<SubmitButton value="Submit message" />
						</div>
						<div class="contact-form__message" v-if="resMessage">
							<p class="contact-form__message-text">
								{{ resMessage }}
							</p>
						</div>
					</form>
				</ValidationObserver>
			</client-only>
		</div>
	</section>
</template>

<script>
import axios from "axios";
export default {
	data() {
		return {
			formData: {
				namex: "",
				email: "",
				website: "",
				message: ""
			},
			websiteRegex: new RegExp("abc"),
			resMessage: null
		};
	},
	props: {
		acfProps: {
			type: Object
		}
	},
	methods: {
		onSubmit(reset) {
			console.log("onSubmit");
			const toSendData = new FormData();
			const data = {
				...this.formData
			};
			for (const name in data) {
				toSendData.append(name, data[name]);
			}

			axios({
				method: "post",
				url:
					"http://elskiba.eu/cms/wp-json/contact-form-7/v1/contact-forms/123/feedback",
				data: toSendData,
				headers: { "Content-Type": "multipart/form-data" }
			})
				.then(res => {
					this.resMessage = res.data.message;
					for (let key in this.formData) {
						this.formData[key] = "";
					}
					console.log(this.resMessage);
					reset();
				})
				.catch(e => console.log(e));
		},
		onFocus() {
			this.resMessage = "";
		}
	}
};
</script>

<style lang="scss" scoped>
.contact-form {
	display: flex;
	flex-wrap: wrap;
	&__input-wrapper {
		position: relative;
		flex: 0 0 33%;
		max-width: 33%;
		margin-bottom: 35px;
		&:nth-child(4),
		&:nth-child(5) {
			flex: 0 0 100%;
			max-width: 100%;
		}
	}

	input,
	textarea {
		background-color: $color-background;
		padding: 12px 40px 12px 20px;
		width: 100%;
		display: block;
		color: #92929a;
		border: none;
		outline: none;
	}
	textarea {
		height: 180px;
	}
	&__error {
		position: relative;
		span {
			position: absolute;
			bottom: -20px;
			left: 5px;
			color: $color-red;
			font-size: 14px;
		}
	}
	&__message {
		width: 100%;
		padding: 0 15px;
		position: relative;
	}
	&__message-text {
		position: absolute;
		left: 15px;
		top: 0;
		right: 15px;
		width: calc(100% - 30px);
		text-align: center;
		color: $color-white;
		font-size: 16px;
		font-weight: bold;
		background: $color-purple;
		padding: 10px;
	}
}
.block-contact-form {
	background: {
		size: cover;
		repeat: no-repeat;
		position: top center;
	}
	&__row {
		margin-bottom: 60px;
	}
	&__col {
		flex: 0 0 25%;
		max-width: 25%;
		text-align: center;
		position: relative;
		figure {
			background-color: $color-green;
		}
		&:nth-child(2) figure {
			background-color: $color-blue;
		}
		&:nth-child(3) figure {
			background-color: $color-primary;
		}
		&:nth-child(4) figure {
			background-color: $color-purple;
		}
	}
	.info-picture {
		width: 50px;
		height: 50px;
		margin: 0 auto 30px;
		border-radius: 4px;
		display: flex;
		justify-content: center;
		align-items: center;

		img {
			display: block;
			width: 20px;
			height: auto;
			height: auto;
		}
	}
	.block-title,
	.info-title {
		color: $color-white;
	}

	.info-title {
		font-weight: 300;
	}
	.block-title {
		margin-bottom: 100px;
	}
}
</style>
