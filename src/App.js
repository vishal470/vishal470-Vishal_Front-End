import List from './List';
const items = [
  { text: 'Item 1' },
  { text: 'Item 2' },
  { text: 'Item 3' },
  { text: 'Item 4' },
  { text: 'Item 5' },
  { text: 'Item 6' },
  { text: 'Item 7' },
  { text: 'Item 8' },
  { text: 'Item 9' },
  { text: 'Item 10' },
];

function App() {
  return (
    <div>
      <h1>List Component Example</h1>
      <List items={items} />
    </div>
  );
}

export default App;
