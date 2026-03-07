import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const FeeChart = ({bookedLawyersDataArr}) => {
    return (
       
        <div className="w-full flex justify-center items-center p-4">
            <div className="w-full max-w-200 aspect-[1.618] max-h-[70vh]">
                
                
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={bookedLawyersDataArr}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        
                        
                        <YAxis width={60} /> 
                        
                        <Bar 
                            dataKey="fee" 
                            fill="#8884d8" 
                            activeBar={{ fill: 'pink', stroke: 'blue' }} 
                            radius={[10, 10, 0, 0]} 
                        />
                    </BarChart>
                </ResponsiveContainer>
                
            </div>
        </div>
    );
};

export default FeeChart;