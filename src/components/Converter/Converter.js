import './Converter.css';
import {useState} from "react";

export const Converter = function () {

    const [departUnit, setDepartUnit] = useState('');
    const [finalUnit, setFinalUnit] = useState('');
    const [count, setCount] = useState(0);

    function handleSubmit() {

        switch (true) {

            /**
             * Cases where initial unit is meter
             */

            case departUnit === 'meter' && finalUnit === 'decimeter' :
                setCount(count * 10)
                break;

            case departUnit === 'meter' && finalUnit === 'centimeter' :
                setCount(count * 100)
                break;

            case departUnit === 'meter' && finalUnit === 'millimeter' :
                setCount(count * 1000)
                break;

            /**
             * Cases where initial unit is decimeter
             */

            case departUnit === 'decimeter' && finalUnit === 'meter' :
                setCount(count / 10)
                break;

            case departUnit === 'decimeter' && finalUnit === 'centimeter' :
                setCount(count * 10)
                break;

            case departUnit === 'decimeter' && finalUnit === 'millimeter' :
                setCount(count * 100)
                break;

            /**
             * Cases where initial unit is centimeter
             */

            case departUnit === 'centimeter' && finalUnit === 'meter' :
                setCount(count / 100)
                break;

            case departUnit === 'centimeter' && finalUnit === 'decimeter' :
                setCount(count / 10)
                break;

            case departUnit === 'centimeter' && finalUnit === 'millimeter' :
                setCount(count * 10)
                break;

            /**
             * Cases where initial unit is millimeter
             */

            case departUnit === 'millimeter' && finalUnit === 'meter' :
                setCount(count / 1000)
                break;

            case departUnit === 'millimeter' && finalUnit === 'decimeter' :
                setCount(count / 100)
                break;

            case departUnit === 'millimeter' && finalUnit === 'centimeter' :
                setCount(count / 10)
                break;


            // Now is the part with Volume


            /**
             * Cases where initial unit is liter
             */

            case departUnit === 'liter' && finalUnit === 'deciliter' :
                setCount(count * 10)
                break;

            case departUnit === 'liter' && finalUnit === 'centiliter' :
                setCount(count * 100)
                break;

            case departUnit === 'liter' && finalUnit === 'milliliter' :
                setCount(count * 1000)
                break;

            /**
             * Cases where initial unit is deciliter
             */

            case departUnit === 'deciliter' && finalUnit === 'liter' :
                setCount(count / 10)
                break;

            case departUnit === 'deciliter' && finalUnit === 'centiliter' :
                setCount(count * 10)
                break;

            case departUnit === 'deciliter' && finalUnit === 'milliliter' :
                setCount(count * 100)
                break;

            /**
             * Cases where initial unit is centiliter
             */

            case departUnit === 'centiliter' && finalUnit === 'liter' :
                setCount(count / 100)
                break;

            case departUnit === 'centiliter' && finalUnit === 'deciliter' :
                setCount(count / 10)
                break;

            case departUnit === 'centiliter' && finalUnit === 'milliliter' :
                setCount(count * 10)
                break;

            /**
             * Cases where initial unit is milliliter
             */

            case departUnit === 'milliliter' && finalUnit === 'liter' :
                setCount(count / 1000)
                break;

            case departUnit === 'milliliter' && finalUnit === 'deciliter' :
                setCount(count / 100)
                break;

            case departUnit === 'milliliter' && finalUnit === 'centiliter' :
                setCount(count / 10)
                break;

        }

    }

    function handleReset() {
        window.location.reload();
    }

    return (
        <div className='ConverterContainer'>

            <div>

                <input type="number" onChange={event => setCount(event.target.value)}/>

                <select onBlur={event => setDepartUnit(event.target.value)}>
                    <option value="">Choose your unit</option>
                    <option value="meter">m</option>
                    <option value="decimeter">dm</option>
                    <option value="centimeter">cm</option>
                    <option value="millimeter">mm</option>
                    <option value="liter">l</option>
                    <option value="deciliter">dl</option>
                    <option value="centiliter">cl</option>
                    <option value="milliliter">ml</option>
                </select>

            </div>

            <div>

                <input type="number" readOnly value={count}/>

                    <select onBlur={event => setFinalUnit(event.target.value)}>
                        <option value="">Choose your unit</option>

                        {
                            departUnit === 'meter' || departUnit ===  'centimeter' || departUnit ===  'decimeter' || departUnit === 'millimeter' ?
                                <>
                                    <option value="meter">m</option>
                                    <option value="decimeter">dm</option>
                                    <option value="centimeter">cm</option>
                                    <option value="millimeter">mm</option>
                                </>
                                : ''
                        }

                        {
                            departUnit === 'liter' || departUnit ===  'centiliter' || departUnit ===  'deciliter' || departUnit === 'milliliter' ?
                                <>
                                    <option value="liter">l</option>
                                    <option value="deciliter">dl</option>
                                    <option value="centiliter">cl</option>
                                    <option value="milliliter">ml</option>
                                </> : ''
                        }

                    </select>


            </div>

            <button onClick={handleSubmit}>Convertir</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}