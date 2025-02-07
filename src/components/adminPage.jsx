import { FcApproval } from "react-icons/fc";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { MdOutlineBookmarks } from "react-icons/md";
import { FiSpeaker } from "react-icons/fi";
import { PiUsersBold } from "react-icons/pi";

function AdminPage() {
  return (
    <div className="w-full h-screen flex"> 
    <div className="w-[400px] h-full bg-green-900 flex flex-col space-y-5 p-10">
        <button className="text-gray-200 text-2xl 
        flex items-center justify-center">
            <MdOutlineDashboardCustomize />
            Dashboard
        </button>
        <button className="text-gray-200 text-2xl 
        flex items-center justify-center">
            <MdOutlineBookmarks />
            Booking
        </button>
        <button className="text-gray-200 text-2xl 
        flex items-center justify-center">
            <FiSpeaker />
            Items
        </button>
        <button className="text-gray-200 text-2xl 
        flex items-center justify-center">
            <PiUsersBold />
            Users
        </button>
    </div>
    </div>
  )
}

export default AdminPage