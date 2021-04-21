import { Field, FieldProps, ErrorMessage } from 'formik';

import ErrorText from '../ErrorText';

import styles from './InputField.module.scss';

interface Props {
  name: string;
  label: string;
  placeholder: string;
}

const InputField = ({ name, label, placeholder }: Props) => {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => {
        const error = meta.touched && !!meta.error;
        const errorStyle = error ? styles.error : '';
        return (
          <section className={styles.nameInput}>
            <div className={`${styles.input} ${errorStyle}`}>
              <label htmlFor={name}>{label}</label>
              <input {...field} id={name} placeholder={placeholder} />
            </div>
            <ErrorMessage
              name={name}
              render={(message) => <ErrorText message={message} />}
            />
          </section>
        );
      }}
    </Field>
  );
};

export default InputField;
