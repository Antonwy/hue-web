import React from 'react'

const Divider = ({dir, size, style}) => {
  return (
    <div className="divider" style={{
        backgroundColor: 'rgb(240,240,240)',
        width: dir === 'ver' ? '1px' : size,
        height: dir === 'hor' ? '1px' : size,
        ...style
    }}>
    </div>
  )
}

export default Divider
