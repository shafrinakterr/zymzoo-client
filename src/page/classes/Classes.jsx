import{ useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import ClassCard from './ClassCard';

const Classes = () => {
    // Assuming initialIndex is defined
    const axiosPublic = useAxiosPublic()
    const [schedules, setSchedules] = useState([])

    axiosPublic.get('/schedule')
        .then(res => {
            setSchedules(res.data)
        })

    return (
        <div className='max-w-6xl mx-auto'>
            <Helmet>
                <title>ZYMZOO | Classes</title>
            </Helmet>
            <div className="pt-32 ">
                <h1  className="text-center space-y-3 text-5xl mb-5 drop-shadow-lg font-semibold">
                    Weekly <span className="text-primaryColor-0"> schedule</span>
                </h1>
                <div className="divider divider-neutral text-primaryColor-0">ZYMZOO</div>
            </div>

            <div className="shadow shadow-white p-10 justify-center flex mt-5 mx-auto">
                <Tabs>
                    <TabList>
                        <Tab>Sunday</Tab>
                        <Tab>Monday</Tab>
                        <Tab>Tuesday</Tab>
                        <Tab>Wednesday</Tab>
                        <Tab>Thusday</Tab>
                        <Tab>Friday</Tab>
                        <Tab>Sat</Tab>
                    </TabList>

                    <TabPanel>
                        {
                            schedules.map(data => <div>
                                {
                                    data.day === 'Sunday' && data.exercises.map(exe => <div  >
                                        <h1  style={{ color:'#C7EB0B'}}>{exe.name1}</h1>
                                        <h1  style={{ color:'#C7EB0B'}}>{exe.name2}</h1>
                                    </div>)
                                }
                            </div>)
                        }

                    </TabPanel>
                    <TabPanel>
                        {
                            schedules.map(data => <div>
                                {
                                    data.day === 'Monday' && data.exercises.map(exe => <div >
                                        <h1  style={{ color:'#C7EB0B'}}>{exe.name1}</h1>
                                        <h1  style={{ color:'#C7EB0B'}}>{exe.name2}</h1>
                                    </div>)
                                }
                            </div>)
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            schedules.map(data => <div>
                                {
                                    data.day === 'Tuesday' && data.exercises.map(exe => <div >
                                        <h1  style={{ color:'#C7EB0B'}}>{exe.name1}</h1>
                                        <h1  style={{ color:'#C7EB0B'}}>{exe.name2}</h1>
                                    </div>)
                                }
                            </div>)
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            schedules.map(data => <div>
                                {
                                    data.day === 'Wednesday' && data.exercises.map(exe => <div >
                                        <h1  style={{ color:'#C7EB0B'}}>{exe.name1}</h1>
                                        <h1  style={{ color:'#C7EB0B'}}>{exe.name2}</h1>
                                    </div>)
                                }
                            </div>)
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            schedules.map(data => <div>
                                {
                                    data.day === 'Thursday' && data.exercises.map(exe => <div >
                                        <h1  style={{ color:'#C7EB0B'}}>{exe.name1}</h1>
                                        <h1  style={{ color:'#C7EB0B'}}>{exe.name2}</h1>
                                    </div>)
                                }
                            </div>)
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            schedules.map(data => <div >
                                {
                                    data.day === 'Friday' && data.exercises.map(exe => <div>
                                        <h1  style={{ color:'#C7EB0B'}}>{exe.name1}</h1>
                                        <h1  style={{ color:'#C7EB0B'}}>{exe.name2}</h1>
                                    </div>)
                                }
                            </div>)
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            schedules.map(data => <div>
                                {
                                    data.day === 'Saturday' && data.exercises.map(exe => <div>
                                        <h1  style={{ color:'#C7EB0B'}}>{exe.name1}</h1>
                                        <h1  style={{ color:'#C7EB0B'}}>{exe.name2}</h1>
                                    </div>)
                                }
                            </div>)
                        }
                    </TabPanel>
                </Tabs>
            </div>
            <ClassCard></ClassCard>
        </div>
    );
};

export default Classes;
