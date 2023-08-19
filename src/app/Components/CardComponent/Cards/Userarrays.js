import Profile from '../../../../assets/images/Avatar.svg'
import circle from '../../../../assets/images/circle.png';
import todoImage from '../../../../assets/images/work-in-progress.png'
import backlogImage from '../../../../assets/images/backlog.png'
import siren from '../../../../assets/images/siren.png'
import menubar from '../../../../assets/images/menu.png'
import done from '../../../../assets/images/check.png'
import close from '../../../../assets/images/close.png'
import medium from '../../../../assets/images/cell-signal-high.svg'
import high from '../../../../assets/images/cell-signal-full.svg'
import low from '../../../../assets/images/cell-signal-medium.svg'
import avatar1 from '../../../../assets/images/avatar (4).svg'
import avatar2 from '../../../../assets/images/avatar (5).svg'
import avatar3 from '../../../../assets/images/avatar (6).svg'
import avatar4 from '../../../../assets/images/avatar (7).svg'


export const users = [
    { image: Profile,  userId:'usr-1'},
    { image: avatar2,userId:'usr-2' },
    { image: avatar3, userId:'usr-3' },
    { image: avatar1, userId:'usr-4' },
    { image: avatar4, userId:'usr-5' }
]

export const statusImages = {
    4: siren,
    0: menubar,
    3: high,
    1: low,
    2: medium,
};

export const statusImg = {
    'In progress': todoImage,
    'Todo': circle,
    'Backlog': backlogImage,
    'Done': done,
    'Cancelled': close
};