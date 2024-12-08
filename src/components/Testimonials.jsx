import { Card } from "antd";

const data = [
    {
        text: "I have been in the UAE for around 30+ years and have never experienced this level of convenience. Everything was swift, location is accessible by metro, I could go after office hours to apply for Passport renewal and staff was super friendly. It is a great news for all my fellow Filipino overseas workers in UAE that our Government has tied-up with a reputable partner.",
        name: "Leonida",
        location: "UAE",
    },
    {
        text: "What a great place to get my Ghanaian passport renewed! From my point of entry, through to the submission of my documents to the point where I left the VFS Global Centre, I felt welcomed and well received. I highly recommend this place to all who needs services regarding their passport applications!",
        name: "George Obeng-Akrofi",
        location: "USA",
    },
    {
        text: "Amazing effort! An unparalleled support provided by VFS Global staff during this season not with standing your hectic work pressure.",
        name: "Kalakara Dehury",
        location: "India",
    },
    {
        text: "It was a fantastic experience. I commend the professionalism, service orientation and attention to detail of the VFS Global staff.",
        name: "M.S. Raghavan",
        location: "India",
    },
]

const Testimonials = () => {
    return (
        <div className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-center mb-8">
                    What our customers say about us
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {data.map((testimonial, index) => (
                        <Card
                            key={index}
                            className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                        >
                            <p className="text-gray-600 dark:text-gray-400 italic mb-4">
                                {testimonial.text}
                            </p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-gray-300 dark:bg-gray-700 rounded-full mr-4"></div>
                                <div>
                                    <h3 className="font-medium">{testimonial.name}</h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        {testimonial.location}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
