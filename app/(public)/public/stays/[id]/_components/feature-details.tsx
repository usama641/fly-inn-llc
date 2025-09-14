import { iconMap } from "@/constants/stays/icon-map";
import React, { useState } from "react";
import { Collapse, Input, Button } from "antd";
import {
  CloseOutlined,
  MinusOutlined,
  PlusOutlined,
  SearchOutlined,
  DownOutlined,
  UpOutlined,
} from "@ant-design/icons";

const FeatureDetails = ({ features }: { features: any }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activePanels, setActivePanels] = useState<string[]>(
    features?.slice(0, 2).map((f: any) => f.id) || []
  );

  // Filter features based on search term
  const filteredFeatures = features?.filter((feature: any) => {
    if (!searchTerm) return true;
    return (
      feature.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      feature.sub_features.some((item: any) =>
        item.sub_heading.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  });

  const handleExpandAll = () => {
    setActivePanels(filteredFeatures?.map((f: any) => f.id) || []);
  };

  const handleCollapseAll = () => {
    setActivePanels([]);
  };

  const handlePanelChange = (keys: string | string[]) => {
    setActivePanels(Array.isArray(keys) ? keys : [keys]);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-primary mt-6 mb-4">
        Feature details
      </h2>
      {/* Search Bar */}
      <div className="mb-4">
        <Input
          placeholder="Search amenities..."
          prefix={<SearchOutlined className="text-gray-400" />}
          suffix={
            searchTerm && (
              <CloseOutlined
                className="text-gray-400 hover:text-gray-600 cursor-pointer"
                onClick={() => setSearchTerm("")}
              />
            )
          }
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="py-2 rounded-lg"
          allowClear={false}
        />
      </div>

      {/* Expand/Collapse Buttons */}
      {/* <div className="flex gap-2 mb-4">
        <Button
          type="default"
          icon={<DownOutlined />}
          onClick={handleExpandAll}
          className="flex items-center"
        >
          Expand All
        </Button>
        <Button
          type="default"
          icon={<UpOutlined />}
          onClick={handleCollapseAll}
          className="flex items-center"
        >
          Collapse All
        </Button>
      </div> */}

      {/* Collapsible Sections */}
      {filteredFeatures?.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <p>No amenities match your search</p>
          <button
            className="mt-2 text-primary hover:underline"
            onClick={() => setSearchTerm("")}
          >
            Clear search
          </button>
        </div>
      ) : (
        <Collapse
          bordered={false}
          expandIcon={({ isActive }) =>
            isActive ? <MinusOutlined /> : <PlusOutlined />
          }
          className="bg-gray-50"
          activeKey={activePanels}
          onChange={handlePanelChange}
        >
          {filteredFeatures?.map((feature: any) => (
            <Collapse.Panel
              key={feature.id}
              header={
                <div className="flex items-center">
                  <div className="text-primary text-xl mr-3">
                    {iconMap(feature.name)}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {feature.name}
                  </h3>
                  <span className="ml-2 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {feature.sub_features.length}
                  </span>
                </div>
              }
              className="mb-4 bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {feature.sub_features.map((item: any) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="text-primary text-xl">
                      {iconMap(item.sub_heading)}
                    </div>
                    <span className="text-base">{item.sub_heading}</span>
                  </div>
                ))}
              </div>
            </Collapse.Panel>
          ))}
        </Collapse>
      )}
    </div>
  );
};

export default FeatureDetails;
