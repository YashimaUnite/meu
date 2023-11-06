import OmochiSection from "@/app/conponents/Omochi/OmochiSection";

// 仮のデータを定義
const chord = "chord";
const initialGrid = [
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
];

const Page = () => {
    return (
        <div>
            <OmochiSection seqmode={chord} sequenceData={initialGrid} />
        </div>
    );
};

export default Page;
