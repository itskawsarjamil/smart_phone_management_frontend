import { Button, DatePicker, Form, Modal, Slider } from "antd";
import { useState } from "react";
import { Controller, FieldValues } from "react-hook-form";
import SMForm from "./form/SMForm";
import SMInput from "./form/SMInput";
import SMSelect from "./form/SMSelect";
import { TQueryParam } from "../types";

const { RangePicker } = DatePicker;

const CustomModal = ({
  payload,
  forWhich,
  modalName = "open Modal",
  setFilterParam,
}: {
  payload?: any;
  forWhich?: string;
  modalName?: string;
  setFilterParam: React.Dispatch<any>;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (data: FieldValues) => {
    const queryParams: TQueryParam[] = [];
    console.log(data);
    data?.brand?.forEach((item: any) =>
      queryParams.push({ name: "brand", value: item })
    );
    data?.cameraQuality?.forEach((item: any) =>
      queryParams.push({ name: "cameraQuality", value: item })
    );
    data?.model?.forEach((item: any) =>
      queryParams.push({ name: "model", value: item })
    );
    data?.batteryLife?.forEach((item: any) =>
      queryParams.push({ name: "batteryLife", value: item })
    );
    data?.os?.forEach((item: any) =>
      queryParams.push({ name: "os", value: item })
    );
    data?.screenSize?.forEach((item: any) =>
      queryParams.push({ name: "screenSize", value: item })
    );
    data?.storage?.forEach((item: any) =>
      queryParams.push({ name: "storage", value: item })
    );

    if (data?.priceRange) {
      queryParams.push({ name: "priceRange", value: data.priceRange });
    }
    if (data?.releaseDate) {
      queryParams.push({ name: "releaseDate", value: data.releaseDate });
    }
    console.log(queryParams);
    setFilterParam(queryParams);
    setIsModalOpen((prev) => !prev);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const brandOptions = [
    { label: "Apple", value: "Apple" },
    { label: "Samsung", value: "Samsung" },
    { label: "OnePlus", value: "OnePlus" },
    { label: "Google", value: "Google" },
  ];

  const osOptions = [
    { label: "iOS", value: "iOS" },
    { label: "Android", value: "Android" },
  ];

  const storageOptions = [
    { label: "64GB", value: "64GB" },
    { label: "128GB", value: "128GB" },
    { label: "256GB", value: "256GB" },
    { label: "512GB", value: "512GB" },
  ];

  const screenSizeOptions = [
    { label: "5.5 inches", value: "5.5 inches" },
    { label: "6.1 inches", value: "6.1 inches" },
    { label: "6.7 inches", value: "6.7 inches" },
  ];

  return (
    <>
      <Button onClick={showModal}>{modalName}</Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <SMForm onSubmit={handleSubmit}>
          {/* Filter by Price */}
          {/* <SMInput
            required={false}
            label="Filter by Price"
            name="price"
            type="number"
          /> */}
          <Controller
            name="priceRange"
            render={({ field, fieldState: { error } }) => (
              <Form.Item label="price range">
                <Slider
                  {...field}
                  range={true}
                  // value={[1000, 50000]}
                  defaultValue={[1000, 50000]}
                  max={50000}
                />
                {error && (
                  <span className="text-red-500">
                    {error.message || "please give valid input"}
                  </span>
                )}
              </Form.Item>
            )}
          />
          {/* Filter by Release Date */}
          <Controller
            name="releaseDate"
            render={({ field, fieldState: { error } }) => (
              <Form.Item label="Filter by Release Date">
                <RangePicker {...field} />
                {error && (
                  <span className="text-red-500">
                    {error.message || "Please provide a valid date range"}
                  </span>
                )}
              </Form.Item>
            )}
          />

          {/* Filter by Brand */}
          <SMSelect
            mode={"multiple"}
            required={false}
            label="Filter by Brand"
            name="brand"
            options={brandOptions}
          />

          {/* Filter by Model */}
          <SMInput
            label="Filter by Model"
            name="model"
            type="text"
            required={false}
          />

          {/* Filter by Operating System */}
          <SMSelect
            mode={"multiple"}
            label="Filter by Operating System"
            name="os"
            options={osOptions}
            required={false}
          />

          {/* Filter by Storage Capacity */}
          <SMSelect
            mode={"multiple"}
            label="Filter by Storage Capacity"
            name="storage"
            options={storageOptions}
            required={false}
          />

          {/* Filter by Screen Size */}
          <SMSelect
            mode={"multiple"}
            label="Filter by Screen Size"
            name="screenSize"
            options={screenSizeOptions}
            required={false}
          />

          {/* Filter by Camera Quality */}
          <SMInput
            label="Filter by Camera Quality"
            name="cameraQuality"
            type="text"
            required={false}
          />

          {/* Filter by Battery Life */}
          <SMInput
            label="Filter by Battery Life"
            name="batteryLife"
            type="number"
            required={false}
          />

          {/* Submit Button */}
          <Button type="primary" htmlType="submit">
            Apply Filters
          </Button>
        </SMForm>
      </Modal>
    </>
  );
};

export default CustomModal;
