import { useGSAP } from '@gsap/react';
import axios from 'axios';
import gsap from 'gsap';
import { useEffect, useState } from 'react'

const sheetId = '1Xlv-dsSDpQSmud0QfutUnKh3_sfVVMGnFRS1_cmtLRk'
const sheetName = 'Sheet1'
const sheetUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${sheetName}`

function csvToObjects(csv) {
    const csvRows = csv.split("\n");
    const propertyNames = csvSplit(csvRows[0]);
    let objects = [];
    for (let i = 1, max = csvRows.length; i < max; i++) {
        let thisObject = {};
        let row = csvSplit(csvRows[i]);
        for (let j = 0, max = row.length; j < max; j++) {
            thisObject[propertyNames[j]] = row[j];
        }
        objects.push(thisObject);
    }
    return objects;
}

function csvSplit(row) {
    return row.split(",").map((val) => val.substring(1, val.length - 1));
}

const Counter = () => {
    const [myVal, setMyVal] = useState({
        value: 0,
        prevValue: 0
    });

    useGSAP(() => {
        const { value, prevValue } = myVal;
        console.log(value, prevValue);

        if (value !== prevValue) {
            gsap
                .from(
                    ".value-container p.value",
                    {
                        duration: 2,
                        innerText: prevValue,
                        roundProps: "innerText",
                        onUpdate: function () {
                            this.targets().forEach(target => {
                                const val = gsap.getProperty(target, "innerText");
                                target.innerText = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            });
                        },
                    },
                );
        }
    }, [myVal]);

    const callMyData = () => {
        axios.get(sheetUrl)
            .then((response) => response.data)
            .then((csvText) => setMyVal(prev => ({
                value: csvToObjects(csvText)[0]?.Value,
                prevValue: prev.value
            })))
            .catch((error) => {
                console.error('Error fetching CSV data:', error);
            });
    }

    useEffect(() => {
        callMyData();

        setInterval(() => {
            callMyData();
        }, 5000);
    }, []);

    useEffect(() => {
        console.log(myVal);
    }, [myVal])

    return (
        <div className='value-container text-white text-7xl font-bold leading-normal'>
            <p className='value'>{myVal.value}</p>
        </div>
    )
}

export default Counter