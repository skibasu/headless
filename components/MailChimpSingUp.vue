<template>
	<client-only>
		<validation-observer
			v-slot="{ invalid }"
			ref="subscribe"
			tag="form"
			class="w-full max-w-lg"
			@submit.prevent="subscribe"
		>
			<div class="mail-chimp">
				<div>
					<validation-provider
						rules="required|email"
						:bails="false"
						tag="div"
						name="Email"
						v-slot="{ errors }"
					>
						<input
							v-model="form.email"
							class="mail-chimp__input"
							id="grid-email"
							type="email"
							placeholder="Email"
							@focus="resetMessage"
						/>
						<ul
							class="mail-chimp__errors-list"
							v-if="errors.length"
						>
							<li
								class="mail-chimp__error"
								v-for="error in errors"
								:key="error"
							>
								<small>{{ error }}</small>
							</li>
						</ul>
						<div>
							<SubmitNewsletter
								value="Subcsribe"
								:disabled="invalid"
							/>
						</div>

						<p
							class="mail-chimp__success-message"
							v-if="response.message"
							v-html="response.message"
						></p>
					</validation-provider>
				</div>
			</div>
		</validation-observer>
	</client-only>
</template>

<script>
import SubmitNewsletter from "./SubmitNewsletter.vue";
export default {
	components: { SubmitNewsletter },
	data() {
		return {
			form: {
				email: "",
				apiKey: "",
				audienceId: ""
			},
			response: {
				status: null,
				message: ""
			},
			cachedForm: {}
		};
	},
	props: {
		acfApiKey: {
			type: String
		},
		acfAudienceId: {
			type: String
		}
	},
	methods: {
		async subscribe(event) {
			this.form.apiKey = this.acfApiKey;
			this.form.audienceId = this.acfAudienceId;
			const d = {
				apiKey: "90e3b3831f93cb106e8322838b5951c3-us4",
				audienceId: "beba7f6c2e"
			};
			const formData = { ...this.form };

			try {
				const { data, status } = await this.$axios.post(
					"http://localhost:3000/api/subscribe",
					formData
				);
				this.response.status = status;
				this.response.message = `Thanks, <span style="color:#d0e182;font-weight:bold">${data.email_address}</span> is now subscribed!`;
			} catch (e) {
				this.response.message = `Email <span style="color:#d0e182;font-weight:bold">${this.form.email}</span> is allready subscribed!`;
			}
		},
		resetMessage() {
			this.response.message = "";
		}
	},
	mounted() {
		this.cachedForm = { ...this.form };
	}
};
</script>

<style lang="scss" scoped>
.mail-chimp {
	&__input {
		background: $color-winter-snow;
		height: 45px;
		border-radius: 3px;
		border: none;
		padding-left: 20px;
		display: block;
		width: 100%;
		margin-bottom: 15px;
		outline: none;
	}
	&__errors-list {
		margin-top: -10px;
		color: $color-red;
	}
	&__success-message {
		color: $color-white;
		font-weight: 500;
		text-align: center;
		margin: 10px 0 0;
		text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2);
		background: $color-dangerous-night;
		padding: 12px;
		font-size: 14px;
		span {
			color: red;
		}
		.email-color {
			color: $color-primary;
			font-weight: 500;
		}
	}
}
</style>
