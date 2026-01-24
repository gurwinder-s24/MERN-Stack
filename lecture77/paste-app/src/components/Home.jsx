import { Copy, PlusCircle } from "lucide-react";
import { useEffect, useState} from 'react'
import toast from 'react-hot-toast';
import { Navigate, useSearchParams } from 'react-router-dom';
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
      _id: pasteId || Date.now().toString(36) + Math.random().toString(36).substring(2),
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
  }

  const createNewPaste = () => {
    setTitle('');
    setContent('');
    setSearchParams({});
    // navigate('/');
  };

  return (
    <div className="w-full h-full py-10 max-w-300 mx-auto px-5 lg:px-0 flex flex-col gap-y-5 items-start">
      {/* for title and util-buttons */}
      <div className='w-full flex flex-row gap-x-4 justify-between items-center'>
        <input
          type='text'
          placeholder='enter title here...'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`${pasteId ? "w-[80%]" : "w-[85%]"} text-black border border-input rounded-md p-2`}
        />

        <button className=' text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700' 
          onClick={createPaste}
        >
          {pasteId ? 'Update Paste' : 'Create Paste'}
        </button>

        {
          pasteId &&
          <button className=' text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-green-600 dark:hover:bg-green-700'
            onClick={createNewPaste}
          >
            <PlusCircle size={20}/>
          </button>
        }
      </div>
      
      {/* content box */}
      <div className={`w-full flex flex-col items-start relative rounded border border-[rgba(128,121,121,0.3)] bg-opacity-10 backdrop-blur-2xl`}>
        {/*div for circles and copy btn */}
        <div className={`w-full rounded-t flex items-center justify-between gap-x-4 px-4 py-2 border-b border-[rgba(128,121,121,0.3)]`}>
          {/* circles */}
          <div className="w-full flex gap-x-1.5 items-center select-none">
              <div className="w-3.25 h-3.25 rounded-full flex items-center justify-center p-px overflow-hidden bg-[rgb(255,95,87)]" />
              <div className="w-3.25 h-3.25 rounded-full flex items-center justify-center p-px overflow-hidden bg-[rgb(254,188,46)]"/>
              <div className="w-3.25 h-3.25 rounded-full flex items-center justify-center p-px overflow-hidden bg-[rgb(45,200,66)]" />
          </div>

          {/* copy btn */}
          <div className={`w-fit rounded-t flex items-center justify-between gap-x-4 px-4`}>
            <button className={`flex justify-center items-center transition-all duration-300 ease-in-out group`}
              onClick={() =>
                {
                  navigator.clipboard.writeText(content);
                  toast.success("Copied to Clipboard", {position: "top-right"});
                }
              }
            >
              <Copy className="group-hover:text-emerald-500 size-5"/>
            </button>
          </div>
        </div>
        
        {/* text field */}
        <textarea className="w-full p-3 focus-visible:ring-0 caret-black" 
          value={content}
          placeholder='enter content here...'
          rows={20}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

    </div>
  )
}

export default Home
