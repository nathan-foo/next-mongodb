import Link from "next/link";
import RemoveButton from "./RemoveButton";
import { HiPencilAlt } from "react-icons/hi";

interface Topic {
    _id: string;
    title: string;
    description: string;
};

const getTopics = async (): Promise<{ topics: Topic[] }> => {
    try {
        const res = await fetch('http://localhost:3000/api/topics', {
            cache: 'no-store',
        });

        if (!res.ok) {
            throw new Error("Failed to fetch topics.");
        }

        return res.json();
    } catch (error) {
        console.log("Error loading topics: ", error);
        return { topics: [] };
    }
};

const TopicList = async () => {

    const { topics } = await getTopics();

    return (
        <>
            {topics.map((t) => (
                <div key={t._id}>
                    <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                        <div>
                            <h2 className="font-bold text-2xl">{t.title}</h2>
                            <div>{t.description}</div>
                        </div>

                        <div className="flex gap-2">
                            <RemoveButton id={t._id} />
                            <Link href={`/edit-topic/${t._id}`}>
                                <HiPencilAlt size={24} />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
 
export default TopicList;