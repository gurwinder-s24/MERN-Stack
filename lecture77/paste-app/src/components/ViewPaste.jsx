import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ViewPaste = () => {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.find((item) => item._id === id);
  console.log(paste);

  return (
    <div>
      <div className='flex flex-row gap-7 place-content-between'>
        <input className='p-2 rounded bg-gray-900 mt-2 w-[60%]'
          type='text'
          // placeholder='enter title here'
          value={paste?.title}
          onChange={(e) => setTitle(e.target.value)}
          disabled
        /> <br />
      </div>

      <div>
        <textarea className='rounded-xl mt-4 min-w-125 p-4 bg-[#0e0e0e]'
          value={paste?.content}
          // placeholder='enter content here'
          onChange={(e) => setContent(e.target.value)}
          rows={20}
          disabled
        />
      </div>

    </div>
  )
}

export default ViewPaste
