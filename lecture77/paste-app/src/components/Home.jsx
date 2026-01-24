import { useEffect, useState} from 'react'
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { addToPastes, updatePerticularPaste } from '../redux/pasteSlice.jsx'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get('pasteId');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allPastes = useSelector((state) => state.paste.pastes);
  useEffect(() => {
    if(pasteId){
      const paste = allPastes.find((item) => item._id === pasteId);
      if(paste){
        setTitle(paste.title);
        setContent(paste.content);
      }
    }
  }, [pasteId]);


  function createPaste(){
    const paste = {
      title: title,
      content: content,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString()
    }

    if(pasteId){
      // update
      dispatch(updatePerticularPaste(paste));
    }
    else{
      // create
      dispatch(addToPastes(paste));
    }

    // after creating or updating, clear the fields
    setTitle('');
    setContent('');
    setSearchParams({});
    // navigate('/pastes');
  }

  return (
    <div>
      <div className='flex flex-row gap-7 place-content-between'>
        <input className='p-2 rounded bg-gray-900 mt-2 w-[60%]'
          type='text'
          placeholder='enter title here'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /> <br />

        <button className='p-2 rounded bg-gray-900 mt-2' onClick={createPaste}>
          {pasteId ? 'Update Paste' : 'Create Paste'}
        </button>
      </div>

      <div>
        <textarea className='rounded-xl mt-4 min-w-[500px] p-4 bg-[#0e0e0e]'
          value={content}
          placeholder='enter content here'
          onChange={(e) => setContent(e.target.value)}
          rows={20}
        />
      </div>

    </div>
  )
}

export default Home
