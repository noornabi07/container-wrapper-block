import { createRoot } from 'react-dom/client';
import MainStyle from './Components/MainStyle/MainStyle';
import './style.scss';
// Block Name
function FrontEnd({ attributes }) {
  return (
    <div>
      <MainStyle attributes={attributes} />
    </div>
  );
}

const container = document.querySelectorAll('.wp-block-ctrb-style');
container?.forEach(ele => {
  const attributes = JSON.parse(ele.dataset.attributes);
  const root = createRoot(ele);
  root.render(<FrontEnd attributes={attributes} />);
})