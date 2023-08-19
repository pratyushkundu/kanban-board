import React from 'react';
import circle from '../../../../assets/images/circle.png';
import todoImage from '../../../../assets/images/work-in-progress.png'
import backlogImage from '../../../../assets/images/backlog.png'
import siren from '../../../../assets/images/siren.png'
import menubar from '../../../../assets/images/menu.png'
import signal from '../../../../assets/images/signal-status.png'
import plus from '../../../../assets/images/plus.png'
import done from '../../../../assets/images/check.png'
import close from '../../../../assets/images/close.png'

const statusImages = {
  'In progress': todoImage,
  'Todo': circle,
  'Backlog': backlogImage,
  'Urgent': siren,
  'No priority': menubar,
  'High': signal,
  'Low': signal,
  'Medium': signal,
  'Done':done,
  'Cancelled':close
};

function StatusInfo({ status, count }) {
  return (
    <div className='status_info'>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '18px', height: '18px' }}>
          <img src={statusImages[status]} style={{ width: '15px', height: '15px' }} />
        </div>
        <div style={{ marginLeft: '12px',fontWeight:'500',opacity:'0.9' ,cursor:'pointer'}}>{status}</div>
        <div style={{ marginLeft: '12px' ,fontWeight:'400',opacity:'0.7' ,cursor:'pointer'}}>{count}</div>
      </div>
      <div style={{ display: 'flex',alignItems:'center'}}>
        <div style={{ width: '14px', height: '14px' ,cursor:'pointer'}}>
          <img src={plus} style={{ width: '14px', height: '14px', opacity: '0.5' }} />
        </div>
        <div style={{ width: '18px', height: '18px' ,marginLeft:'5px',marginTop:'6px',cursor:'pointer'}}>
          <img src={menubar} style={{ width: '18px', height: '18px' }} />
        </div>
      </div>
    </div>
  );
}

export default StatusInfo;
