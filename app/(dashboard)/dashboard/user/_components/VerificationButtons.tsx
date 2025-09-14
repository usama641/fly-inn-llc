import { FC } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

interface VerificationButtonsProps {
  isVerified: boolean;
  label: string;
  onVerify: () => void;
  onUnverify?: () => void;
}

const VerificationButtons: FC<VerificationButtonsProps> = ({
  isVerified,
  label,
  onVerify,
  onUnverify,
}) => {
  return (
    <>
      {isVerified ? (
        <>
          <button
            className="w-full bg-green-600 text-white text-xs whitespace-nowrap flex items-center justify-center gap-1 px-2 py-1 border-none rounded-xl"
          >
            <FaCheckCircle className="w-3.5 h-3.5" />
            Verified
          </button>

          {label !== 'Email' && (
            <button
              className="w-full bg-[#CE2029] text-white text-xs whitespace-nowrap flex items-center justify-center gap-1 px-2 py-1 mt-1 border-none rounded-xl"
              onClick={onUnverify}
            >
              <FaTimesCircle className="w-3.5 h-3.5" />
              Click to Unverify
            </button>
          )}
        </>
      ) : (
        <>
          <button
            className="w-full bg-yellow-500 text-white text-xs whitespace-nowrap flex items-center justify-center gap-1 px-2 py-1 border-none rounded-xl"
          >
            Pending
          </button>

          <button
            className="w-full bg-green-600 text-white text-xs whitespace-nowrap flex items-center justify-center gap-1 px-2 py-1 mt-1 border-none rounded-xl"
            onClick={onVerify}
          >
            <FaTimesCircle className="w-3.5 h-3.5" />
            Click to Verify
          </button>
        </>
      )}
    </>
  );
};

export default VerificationButtons;