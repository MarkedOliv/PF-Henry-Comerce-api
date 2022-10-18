/** @format */

import { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { IoSettingsSharp } from 'react-icons/io5';

export const ConfigButton = ({ dark, setDark }) => {
  const [active, setActive] = useState(false);
  return (
    <>
      {active === false && (
        <div className='config-box'>
          <span
            className='icon trigger is-large'
            onClick={() => setActive(true)}>
            <IoSettingsSharp className='mdi mdi-settings mdi-36px' />
          </span>
        </div>
      )}

      {active && (
        <div className='config-box'>
          <div className='config-wrapper config-boxwidth'>
            <div className='field'>
              <label className='label'>App style</label>
              <div className='field'>
                <div className='control'>
                  <label className='b-radio radio'>
                    <input type='radio' value='default' />
                    <span className='check'></span>
                    <span className='control-label'> Default </span>
                  </label>
                </div>
                <div className='control'>
                  <label className='b-radio radio'>
                    <input type='radio' value='light' />
                    <span className='check'></span>
                    <span className='control-label'> Light </span>
                  </label>
                </div>
                <div className='control'>
                  <label className='b-radio radio'>
                    <input type='radio' value='dark' />
                    <span className='check'></span>
                    <span className='control-label'> Dark </span>
                  </label>
                </div>
              </div>
            </div>
            <div className='field'>
              <label className='label'>Updates Bar</label>
              <button type='button' className='button is-small'>
                <span>
                  <span className='icon'>
                    <i className='mdi mdi-bell default'></i>
                  </span>
                  <span>Toggle</span>
                </span>
              </button>
            </div>
            <div className='field'>
              <label className='label'>Layout</label>
              <div className='field'>
                <div className='control'>
                  <label className='b-radio radio'>
                    <input type='radio' value='default' />
                    <span className='check'></span>
                    <span className='control-label'> Default </span>
                  </label>
                </div>
                <div className='control'>
                  <label className='b-radio radio'>
                    <input type='radio' value='expanded' />
                    <span className='check'></span>
                    <span className='control-label'> Expanded </span>
                  </label>
                </div>
                <div className='control'>
                  <label className='b-radio radio'>
                    <input type='radio' value='boxed' />
                    <span className='check'></span>
                    <span className='control-label'> Boxed </span>
                  </label>
                </div>
                <div className='control'>
                  <label className='b-radio radio'>
                    <input type='radio' value='wide' />
                    <span className='check'></span>
                    <span className='control-label'> Wide </span>
                  </label>
                </div>
              </div>
            </div>
            <span
              className='icon is-medium close-button'
              onClick={() => setActive(false)}>
              <GrClose className='mdi mdi-24px mdi-close' />
            </span>
          </div>
        </div>
      )}
    </>
  );
};
