import React, { useEffect, useState } from "react";
import "./Histogram.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Papa from "papaparse";
import axios from "axios";

function Histogram() {
    const [histogramData, setHistogramData] = useState(null);

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload) {
            return (
                <div className="custom-tooltip">
                    <p className="label">{`Word: ${payload[0].payload.word}`}</p>
                    <p className="count">{`Count: ${payload[0].payload.count}`}</p>
                </div>
            );
        }

        return null;
    };

    const getAndParseWords = async () => {
        const dataObject = await axios.get(
            "https://www.terriblytinytales.com/test.txt"
        );
        const words = dataObject.data.split(/\s+/);
        const wordsCount = {};

        words.forEach((word) => {
            const lowerCaseWord = word.toLowerCase();
            wordsCount[lowerCaseWord] = (wordsCount[lowerCaseWord] || 0) + 1;
        });

        const wordsInSortedOrder = Object.entries(wordsCount).sort(
            (a, b) => b[1] - a[1]
        );
        const topTwentyWords = wordsInSortedOrder
            .slice(0, 20)
            .map(([word, count]) => ({ word, count }));

        setHistogramData(topTwentyWords);
    };

    useEffect(() => {
        getAndParseWords();
    }, []);

    const exportCSV = () => {
        const csv = Papa.unparse(histogramData);
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", "ttt-words-frequency.csv");
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="histogram_container_main">
            {histogramData && (
                <div>
                    <BarChart
                        style={{ cursor: "pointer" }}
                        width={900}
                        height={500}
                        data={histogramData}
                        margin={{
                            top: 5,
                            right: 20,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="5 5" />
                        <XAxis stroke="white" dataKey="word" />
                        <YAxis stroke="white" />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                        <Bar dataKey="count" fill="#05BFDB" />
                    </BarChart>
                </div>
            )}
            <div className="histogram_container_main_button">
                <button onClick={exportCSV}>Export</button>
            </div>
        </div>
    );
};

export default Histogram;