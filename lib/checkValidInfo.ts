export const getIsInputValid = ({
  toBeCheckedValue,
  regPattern,
}: {
  toBeCheckedValue: string;
  regPattern: RegExp;
}) => {
  if (toBeCheckedValue === '') return;
  return regPattern.test(toBeCheckedValue);
};
