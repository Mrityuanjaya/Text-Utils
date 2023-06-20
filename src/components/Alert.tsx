import { AlertProps } from "./types";

export const Alert = (props: AlertProps) => {
  const capitalize = (word: string) => word[0].toUpperCase() + word.slice(1);
  return (
    props.alert.type && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong> {props.alert.content}
      </div>
    )
  );
};
