import { Copy } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast';

const ViewPaste = () => {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.filter((item) => item._id === id)[0];
  console.log(paste);

  return (
    <div className='w-full h-full py-10 max-w-300 mx-auto px-5 lg:px-0 '>
      <div className='flex flex-col gap-y-5 items-start'>

        {/* title */}
        <input className='w-full text-black border rounded-md p-2'
          type='text'
          // placeholder='enter title here'
          value={paste?.title}
          onChange={(e) => setTitle(e.target.value)}
          disabled
        />
        
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
                    navigator.clipboard.writeText(paste.content);
                    toast.success("Copied to Clipboard", {position: "top-right"})
                  }
                }
              >
                <Copy className="group-hover:text-emerald-500 size-5"/>
              </button>
            </div>
          </div>
          
          {/* text field */}
          <textarea className="w-full p-3 focus-visible:ring-0 caret-black" 
            disabled
            value={paste?.content}
            placeholder='nothing added here...'
            rows={20}
          />
        </div>

      </div>
    </div>
  )
}

export default ViewPaste
