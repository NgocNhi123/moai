import { ErrorMessage, Field, Form, Formik, FormikErrors } from "formik";
import { FormError, Input, TextArea } from "../../../../core/src";
import { ERRORS, FormValues, SubmitButton, postToServer } from "./utils";
import s from "./form.module.css";

export const FormikExample = (): JSX.Element => {
	/* import { Input, Button, FormError } from "../../../core/src" */

	const title = (
		<div>
			<label htmlFor="fm-title">Title</label>
			<Field id="fm-title" type="text" name="title" as={Input} />
			<ErrorMessage name="title" component={FormError} />
		</div>
	);

	const message = (
		<div>
			<label htmlFor="fm-message">Message</label>
			<Field id="fm-message" name="message" as={TextArea} />
			<ErrorMessage name="message" component={FormError} />
		</div>
	);

	const validate = (values: FormValues): FormikErrors<FormValues> => {
		const errors: FormikErrors<FormValues> = {};
		if (!values.title) errors.title = ERRORS.titleRequired;
		if (!values.message) errors.message = ERRORS.messageRequired;
		if (values.message.length < 5) errors.message = ERRORS.messageLength;
		return errors;
	};

	return (
		<Formik<FormValues>
			initialValues={{ title: "", message: "" }}
			validate={validate}
			onSubmit={async (values, { setSubmitting }) => {
				await postToServer(values);
				setSubmitting(false);
			}}
		>
			{({ isSubmitting: busy }) => (
				<Form className={s.form}>
					{title}
					{message}
					<SubmitButton busy={busy} />
				</Form>
			)}
		</Formik>
	);
};
