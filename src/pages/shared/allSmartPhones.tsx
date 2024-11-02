import type { TableColumnsType } from "antd";
import {
  Button,
  Divider,
  Pagination,
  Row,
  Space,
  Table,
  TableProps,
} from "antd";
import React, { useState } from "react";
import CustomModal from "../../components/customModal";
import { TQueryParam, TSmartPhone } from "../../types";
import { useGetAllSmartPhonesQuery } from "../../redux/features/smartPhone/smartPhoneApi";

/**
 * name: string;
  model: string;
  brand: string;
  os: string;
  storage: string;
  screenSize: string;
  cameraQuality: string;
  batteryLife: number;
  releaseDate: Date;
  price: number;
  quantity: number;







  //filter value :
  {
    title: "Name",
    dataIndex: "name",
    filters: [
      // {
      //   text: "Joe-text",
      //   value: "Joe-value",
      // },
      // {
      //   text: "Category 1",
      //   value: "Category 1",
      //   children: [
      //     {
      //       text: "Yellow",
      //       value: "Yellow",
      //     },
      //     {
      //       text: "Pink",
      //       value: "Pink",
      //     },
      //   ],
      // },
      // {
      //   text: "Black",
      //   value: "Black",
      // },
    ],
    filterMode: "tree",
    onFilter: (value, record) => record.name.includes(value as string),

    key: "name",
    width: 100,
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Model",
    dataIndex: "model",
    key: "model",
    width: 100,
    sorter: (a, b) => a.model.length - b.model.length,
  },
 */

interface DataType {
  key: React.Key;
  name: string;
  model: string;
  brand: string;
  os: string;
  storage: string;
  screenSize: string;
  cameraQuality: string;
  batteryLife: number;
  releaseDate: Date;
  price: number;
  quantity: number;
}

// const data: DataType[] = [
//   {
//     key: "1",
//     name: "John Brown",
//     model: "1210",
//     age: 32,
//     address: "New York No. 1 Lake Park",
//   },
//   {
//     key: "2",
//     name: "Jim Green",
//     model: "1210",
//     age: 42,
//     address: "London No. 1 Lake Park",
//   },
//   {
//     key: "3",
//     name: "Joe Black",
//     model: "1210",
//     age: 32,
//     address: "Sydney No. 1 Lake Park",
//   },
//   {
//     key: "4",
//     name: "Disabled User",
//     model: "1210",
//     age: 99,
//     address: "Sydney No. 1 Lake Park",
//   },
// ];

// rowSelection object indicates the need for row selection
const rowSelection: TableProps<DataType>["rowSelection"] = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
};
const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    filters: [],
    filterMode: "tree",
    onFilter: (value, record) => record.name.includes(value as string),

    key: "name",
    width: 100,
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Model",
    dataIndex: "model",
    filters: [],
    filterMode: "tree",
    onFilter: (value, record) => record.model.includes(value as string),

    key: "model",
    width: 100,
    sorter: (a, b) => a.model.length - b.model.length,
  },
  {
    title: "Brand",
    dataIndex: "brand",
    filters: [],
    filterMode: "tree",
    onFilter: (value, record) => record.brand.includes(value as string),

    key: "brand",
    width: 100,
    sorter: (a, b) => a.brand.length - b.brand.length,
  },
  {
    title: "Operating System",
    dataIndex: "os",
    filters: [],
    filterMode: "tree",
    onFilter: (value, record) => record.os.includes(value as string),

    key: "os",
    width: 100,
    sorter: (a, b) => a.os.length - b.os.length,
  },
  {
    title: "Storage",
    dataIndex: "storage",
    filters: [],
    filterMode: "tree",
    onFilter: (value, record) => record.storage.includes(value as string),

    key: "storage",
    width: 100,
    sorter: (a, b) => a.storage.length - b.storage.length,
  },
  {
    title: "Screen Size",
    dataIndex: "screenSize",
    filters: [],
    filterMode: "tree",
    onFilter: (value, record) => record.screenSize.includes(value as string),

    key: "screenSize",
    width: 100,
    sorter: (a, b) => a.screenSize.length - b.screenSize.length,
  },
  {
    title: "Camera Quality",
    dataIndex: "cameraQuality",
    filters: [],
    filterMode: "tree",
    onFilter: (value, record) => record.cameraQuality.includes(value as string),

    key: "cameraQuality",
    width: 100,
    sorter: (a, b) => a.cameraQuality.length - b.cameraQuality.length,
  },
  {
    title: "Battery Life",
    dataIndex: "batteryLife",
    key: "batteryLife",
    width: 100,
    sorter: (a, b) => a.batteryLife - b.batteryLife,
  },
  {
    title: "Release Date",
    dataIndex: "releaseDate",
    key: "releaseDate",
    width: 100,
    render: (date) =>
      new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    sorter: (a, b) => {
      const dateA = new Date(a.releaseDate).getTime();
      const dateB = new Date(b.releaseDate).getTime();
      return dateA - dateB;
    },
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    width: 100,
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
    width: 100,
    sorter: (a, b) => a.quantity - b.quantity,
  },
  {
    title: "Action",
    key: "action",
    fixed: "right",
    width: 100,
    render: (item) => {
      console.log(item);
      return (
        <Space>
          {/* <Link to={`/admin/student-data/${item.key}`}>
          </Link> */}
          <Button>Details</Button>
          <Button>Update</Button>
          <Button>Delete</Button>
        </Space>
      );
    },
  },
];

const AllSmartPhone = () => {
  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);

  const { data: smarTPhonesData, isLoading } =
    useGetAllSmartPhonesQuery(params);

  const [page, setPage] = useState(smarTPhonesData?.meta?.page);
  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
    if (extra.action === "filter") {
      // console.log();
      // const queryParams: TQueryParam[] = [];
      // filters.name?.forEach((item) =>
      // queryParams.push({ name: "name", value: item })
      // );
      // filters.year?.forEach((item) =>
      // queryParams.push({ name: "year", value: item })
      // );
      // setParams(queryParams);
    }
  };

  const tableData = smarTPhonesData?.data.map((item: TSmartPhone) => {
    return {
      key: item?._id,
      ...item,
    };
  });

  return (
    <div>
      <Row justify={"space-between"} align={"middle"}>
        <CustomModal modalName="filter" setFilterParam={setParams} />
        <Button
          onClick={() => setParams(undefined)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </Row>

      <Table<DataType>
        rowSelection={{ type: "checkbox", ...rowSelection }}
        columns={columns}
        dataSource={tableData}
        scroll={{ x: 2500 }}
        pagination={false}
        onChange={onChange}
      />
      <Pagination
        current={page}
        onChange={(value) => setPage(value)}
        pageSize={smarTPhonesData?.meta?.limit}
        total={smarTPhonesData?.meta?.total}
      />
    </div>
  );
};

export default AllSmartPhone;
