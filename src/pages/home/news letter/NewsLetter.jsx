import toast from "react-hot-toast";

const NewsLetter = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        if (email) {
            return toast.success('Thanaks for Subscribe...!')
        }
    }
    return (
        <div>
            <div className="bg-[url('https://i.ibb.co/ZfP2CF0/newsletter.png')] bg-cover bg-no-repeat object-cover flex items-center justify-between py-14 px-3 md:px-8 lg:px-10 flex-col lg:flex-row w-full h-auto gap-10 my-12">
                <div className="w-full lg:w-1/2 ">
                    <h1 className="text-4xl font-bold">Subscribe to our monthly newsletter</h1>
                </div>
                <form onSubmit={handleSubmit} className="w-full lg:w-1/2 relative " >
                    <input type="email" name="email" placeholder="your email address...." className="p-5 rounded-full shadow-xl border text-base font-medium text-black w-full" required />
                    <button className="btn md:px-5 lg:px-10 rounded-full bg-green-600 text-white text-base font-medium uppercase absolute top-2 right-3 hover:text-black">Subscribe</button>
                </form>
            </div>
        </div>
    );
};

export default NewsLetter;