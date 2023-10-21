import { Notification } from 'components/Notification/Notification';
import { Item } from './Statistics.styled';

export const Statistics = ({ stats, total, positivePercentage }) => {
  const keys = Object.keys(stats);
  const statisticsList = keys.map(key => (
    <Item key={key}>
      {key}: {stats[key]}
    </Item>
  ));

  return (
    <>
      {total ? (
        <>
          <ul>{statisticsList}</ul>
          <div>
            <p>Total: {total}</p>
            <p>Positive feedback: {positivePercentage}%</p>
          </div>
        </>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </>
  );
};
