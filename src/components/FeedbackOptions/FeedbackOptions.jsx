import { Button, ButtonsList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttonsList = options.map(key => (
    <li key={key}>
      <Button type="button" name={key} onClick={() => onLeaveFeedback(key)}>
        {key}
      </Button>
    </li>
  ));

  return <ButtonsList>{buttonsList}</ButtonsList>;
};
