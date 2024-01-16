import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
  message?: string;
}

const FormError: React.FC<FormErrorProps> = ({ message }) => {
  return (
    <>
      {message ? (
        <div className="flex items-center gap-x-2 p-3 text-sm text-destructive rounded bg-destructive/15">
          <ExclamationTriangleIcon className="w-4 h-4" />
          <p>{message}</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default FormError;
