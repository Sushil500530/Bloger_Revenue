import toast from "react-hot-toast";

const NewsLetter = () => {
    const handleSubmit = (e)=> {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        if(email){
            return toast.success('Thanaks for Subscribe...!')
        }
    }
    return (
        <div className="flex items-center justify-between p-10 flex-col lg:flex-row w-full h-auto gap-10">
            <div className="w-full lg:w-1/2 ">
                <h1 className="text-4xl font-bold">Subscribe to our monthly newsletter</h1>
            </div>
            <form onSubmit={handleSubmit} className="w-full lg:w-1/2 relative " >
                <input type="email" name="email" placeholder="your email address...." className="p-5 rounded-full shadow-xl border text-base font-medium text-black w-full" required />
                <button className="btn px-10 rounded-full bg-green-600 text-white text-[18px] font-medium uppercase absolute top-2 right-3 hover:text-black">Subscribe</button>
            </form>
        </div>
    );
};

export default NewsLetter;