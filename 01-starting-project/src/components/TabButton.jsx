export default function TabButton({ children, onSelect }) {
  // console.log(props);
  console.log('TAB COMPONENT EXECUTING...');
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  )
}