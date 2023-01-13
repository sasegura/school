import React from 'react';
import ContactFields from '@/components/form/contact-fields';

const ApplyFields = ({
  courseList,
  editionList,
  course,
  edition,
  register,
  errorClass,
  errors,
}) => {
  return (
    <>
      <div className="col-lg-8 col-sm-12">
        <select
          value={course?.id}
          className={'input-form' + errorClass(errors.course)}
          {...register('course', { required: true })}
        >
          {courseList.map((cour) => (
            <option key={cour.id} value={cour?.id} id={cour.name}>
              {cour?.name}
            </option>
          ))}
        </select>
      </div>
      <div className="col-lg-4 col-sm-12">
        <select
          value={edition?.id}
          className={'input-form' + errorClass(errors.edition)}
          {...register('edition', { required: true })}
        >
          {editionList.map((edit) => (
            <option value={edit?.id} key={edit?.id} id={edit.name}>
              {edit?.name}
            </option>
          ))}
        </select>
      </div>
      <ContactFields
        register={register}
        errorClass={errorClass}
        errors={errors}
      />
    </>
  );
};

export default ApplyFields;
