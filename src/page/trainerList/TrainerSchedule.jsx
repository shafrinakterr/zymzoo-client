

const TrainerSchedule = ({ date, index = 0 }) => {
    return (
        <div className="text-sm flex justify-center items-center">
            <div>
                <div className="">
                    <div className="mt-2 w-12 ">
                        <p>Day{index + 1}</p>
                       
                    </div>
                </div>
            </div>
            <tr className="mt-2">

                <td>
                    <div className="flex items-center gap-3">

                        <div>
                            <div className="font-bold">{date?.slot1}</div>
                            <div className="text-sm ">{date?.slot2}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {date?.slot3}
                    <br />
                </td>
                <td>
                    {date?.slot4}
                    <br />
                </td>
                <th >
                    {date?.slot5}
                </th>
                <th>
                    {date?.slot6}
                </th>
                <th>
                    {date?.slot7}
                </th>
                <th>
                    {date?.slot8}
                </th>
                <th>
                    {date?.slot9}
                </th>
            </tr>

        </div>
    );
};

export default TrainerSchedule;
