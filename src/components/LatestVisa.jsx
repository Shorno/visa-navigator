import {ArrowRightOutlined} from "@ant-design/icons";


const latestVisas = [
    {
        "country": "Canada",
        "countryImage": "https://cdn-s3.thevarsity.ca/2023/11/varsity-partners-canada-good-place-to-visit.png",
        "visaType": "Work Permit",
        "processingTime": "4-6 weeks",
        "fee": "$155",
        "validity": "2 years",
        "applicationMethod": "Online"
    },
    {
        "country": "Australia",
        "countryImage": "https://i.ytimg.com/vi/vwStzHxKh44/maxresdefault.jpg",
        "visaType": "Student Visa",
        "processingTime": "3-5 weeks",
        "fee": "$620",
        "validity": "Duration of study",
        "applicationMethod": "Online + Biometrics"
    },
    {
        "country": "United Kingdom",
        "countryImage": "https://www.visitusa.org.uk/userassets/social-media/visit-usa-1200x630.jpg",
        "visaType": "Skilled Worker Visa",
        "processingTime": "3-8 weeks",
        "fee": "£625",
        "validity": "5 years",
        "applicationMethod": "Online + Interview"
    },
    {
        "country": "Germany",
        "countryImage": "https://www.cabinzero.com/cdn/shop/articles/Best-Places-To-Visit-In-Germany.jpg?v=1666839236",
        "visaType": "Job Seeker Visa",
        "processingTime": "4-6 weeks",
        "fee": "€75",
        "validity": "6 months",
        "applicationMethod": "Embassy Application"
    },
    {
        "country": "New Zealand",
        "countryImage": "https://i.ytimg.com/vi/UAEwx_32Y98/maxresdefault.jpg",
        "visaType": "Working Holiday Visa",
        "processingTime": "2-4 weeks",
        "fee": "$208",
        "validity": "1 year",
        "applicationMethod": "Online"
    },
    {
        "country": "Singapore",
        "countryImage": "https://www.thepoortraveler.net/wp-content/uploads/2017/06/Singapore-Travel-Guide.jpg",
        "visaType": "Employment Pass",
        "processingTime": "3-5 weeks",
        "fee": "SGD 70",
        "validity": "2 years",
        "applicationMethod": "Online + Employer Sponsorship"
    }
]

export default function LatestVisa() {
    return (
        <>
            <section className="my-16 container mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Latest Visas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {latestVisas.map((latestVisa) => (
                        <div key={latestVisa.country} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src={latestVisa.countryImage} alt="Country"
                                 className="w-full h-48 object-cover"/>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{latestVisa.country}</h3>
                                <p className="text-gray-600 mb-4">{latestVisa.visaType}</p>
                                <ul className="text-sm text-gray-500 mb-4">
                                    <li>Processing Time: {latestVisa.processingTime}</li>
                                    <li>Fee: {latestVisa.fee}</li>
                                    <li>Validity: {latestVisa.validity}</li>
                                </ul>
                                <a href="#" className="text-blue-500 font-bold flex items-center hover:underline">
                                    See Details <ArrowRightOutlined className="ml-1" size={16}/>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <a href="/all-visas"
                       className="bg-blue-500 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-600 transition duration-300">
                        See All Visas
                    </a>
                </div>
            </section>
        </>
    )
}