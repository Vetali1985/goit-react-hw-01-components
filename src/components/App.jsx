import { Profile } from './Profile/Profile';
import user from 'components/Profile/user.json';
import { Statistics } from './Statistics/Statistics';
import data from 'components/Statistics/data.json';
import { FriendsList } from './FriendList/FriendList';
import friends from 'components/Friends/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import items from 'components/TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory
        items={items}
        id={items.id}
        type={items.type}
        amount={items.amount}
        currency={items.currency}
      />
    </div>
  );
};
