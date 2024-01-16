import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormSuccessProps {
  message?: string;
}

const FormSuccess: React.FC<FormSuccessProps> = ({ message }) => {
  return (
    <>
      {message ? (
        <div className="flex items-center gap-x-2 p-3 text-sm text-emerald-500 rounded bg-emerald-500/15">
          <CheckCircledIcon className="w-4 h-4" />
          <p>{message}</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default FormSuccess;
