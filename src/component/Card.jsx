import React from "react";
import Swal from 'sweetalert2';

const Card = ({ id, img, type, title }) => {
  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: 'คุณแน่ใจที่จะลบหรือไม่?',
        text: "คุณจะไม่สามารถเปลี่ยนกลับสิ่งนี้ได้!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'ยืนยันลบ!',
        cancelButtonText: 'ยกเลิก',
      });

      if (result.isConfirmed) {
        const response = await fetch(`http://localhost:3000/restaurants/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          Swal.fire(
            'ลบเรียบร้อย!',
            'ร้านอาหารถูกลบแล้ว',
            'success'
          ).then(() => {
            window.location.reload();
          });
        } else {
          throw new Error('เกิดข้อผิดพลาดในการลบ!');
        }
      }
    } catch (error) {
      Swal.fire(
        'Error!',
        'ไม่สามารถลบร้านอาหารได้',
        'error'
      );
    }
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={img} alt={title} />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{type}</p>
        <a href={`/edit/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Edit
        </a>
        <button className="inline-flex items-center px-3 py-2 ml-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" type="button" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
