'use client'

import { getCategoriesThunk, putCategoriesThunk } from '@/app/redux/slices/Categories';
import { Modal } from 'antd';
import React, { useState } from 'react'
import { MdEdit } from 'react-icons/md'
import { useDispatch } from 'react-redux';

function ChinhSuaLoai(props: { data: any; }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tenLoai, setTenLoai] = useState(props.data.tenLoai); // Local state for tenLoai
    const dispatch = useDispatch();
    
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        // Example: Dispatch an action to update props.data.tenLoai in Redux store
        // dispatch({ type: 'UPDATE_TEN_LOAI', payload: tenLoai });
        // setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = () => {
        const data={_id:props.data._id,
            tenLoai

        }
       dispatch(putCategoriesThunk(data));
      dispatch(getCategoriesThunk(""));
        
        handleOk();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTenLoai(e.target.value); // Update local state on input change
    };

    return (
        <div>
            <p onClick={showModal}><MdEdit /></p>

            <Modal title="Chỉnh Sửa Tên Loại" visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                    <div className="group-form__two d-flex gap-2">
                        <div className="group-form__one w-50">
                            <label htmlFor="tenLoai" className="label">Tên Loại*</label>
                            <input
                                type="text"
                                id="tenLoai"
                                placeholder="Nhập tên loại"
                                className="form-input"
                                name="tenLoai"
                                value={tenLoai}
                                onChange={handleChange} // Handle input changes
                            />
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <button type="button" className="btn btn-primary-one w-[80px] h-[28px] rounded-sm" onClick={handleCancel}>Quay Lại</button>
                        <button type="submit" className="btn btn-primary-two w-[80px] h-[28px] rounded-sm">Xác Nhận</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}

export default ChinhSuaLoai;