import {
  EnvironmentOutlined,
  CarOutlined,
  ClockCircleOutlined,
  LinkOutlined,
  SafetyOutlined,
  RadarChartOutlined,
  ApartmentOutlined,
} from "@ant-design/icons";
import { Card, Divider, Tag, Button, Row, Col } from "antd";
import { GiFuelTank } from "react-icons/gi";

const AirportDetailsSection = ({ airports }: { airports: any }) => {
  return (
    <div className="mt-12">
      <h2 className="text-xl font-semibold text-primary mt-6 mb-4">
        Airport information
      </h2>

      {airports?.map((airport: any) => (
        <Card
          key={airport.id}
          // Remove border and shadow, rely on subtle background and internal spacing
          className="mb-10  bg-white border-0 shadow"
          classNames={{ body: "p-0" }}
        >
          {/* Header with Airport Name */}
          <div className="p-8 bg-gray-50">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {airport.airport_name}
                  <span className="ml-2 font-mono text-gray-600 text-lg">
                    ({airport.airport_identifier})
                  </span>
                </h3>
                <div className="flex items-center mt-3 text-gray-700">
                  <span className="font-medium text-sm px-2 py-1 rounded-full bg-gray-200 text-gray-700">
                    {airport.airport_use}
                  </span>
                  <span className="ml-4">
                    <EnvironmentOutlined className="mr-2 text-gray-500" />
                    Elevation:{" "}
                    <span className="font-medium">
                      {airport.elevation_feets} ft
                    </span>
                  </span>
                </div>
              </div>
              {airport.air_nav && (
                <Button
                  type="link"
                  icon={<LinkOutlined className="text-gray-600" />}
                  href={airport.air_nav}
                  target="_blank"
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                >
                  View on AirNav
                </Button>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="p-8">
            <Row gutter={[48, 48]}>
              {/* Runway Information */}
              <Col xs={24} md={12}>
                <div className="h-full">
                  <h4 className="font-semibold text-xl mb-4 flex items-center text-gray-800">
                    <SafetyOutlined className="text-gray-500 mr-3" />
                    Runway Details
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                    <div>
                      <p className="text-sm text-gray-500">Orientation</p>
                      <p className="font-medium text-base text-gray-900 mt-1">
                        {airport.orientation}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Dimensions</p>
                      <p className="font-medium text-base text-gray-900 mt-1">
                        {airport.dimension_feets}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Surface</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {airport.surface?.map((surf: any) => (
                          <span
                            key={surf}
                            className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700"
                          >
                            {surf}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Condition</p>
                      <p className="font-medium text-gray-900 mt-1">
                        {airport.runway_condition || "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
              </Col>

              {/* Facilities */}
              <Col xs={24} md={12}>
                <div className="h-full">
                  <h4 className="font-semibold text-xl mb-4 flex items-center text-gray-800">
                    <ApartmentOutlined className="text-gray-500 mr-3" />
                    Facilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Lighting</p>
                      <p className="font-medium mt-1">
                        {airport.lighting ? (
                          <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                            Available
                          </span>
                        ) : (
                          <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                            None
                          </span>
                        )}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Fuel</p>
                      <div className="flex items-center gap-2 mt-1">
                        {airport.fuel?.length > 0 ? (
                          airport.fuel.map((f: any) => (
                            <span
                              key={f}
                              className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700"
                            >
                              {f}
                            </span>
                          ))
                        ) : (
                          <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                            None
                          </span>
                        )}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Parking</p>
                      <p className="font-medium text-gray-900 mt-1">
                        {airport.parking || "N/A"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Pattern</p>
                      <p className="font-medium text-gray-900 mt-1">
                        {airport.pattern || "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
              </Col>

              {/* Communication & Hours */}
              <Col span={24}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                  <div>
                    <h4 className="font-semibold text-xl mb-4 flex items-center text-gray-800">
                      <RadarChartOutlined className="text-gray-500 mr-3" />
                      Communication
                    </h4>
                    <div>
                      <p className="text-sm text-gray-500">CTAF/UNICOM</p>
                      <p className="font-medium text-base text-gray-900 mt-1">
                        {airport.ctaf_unicom || "N/A"}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl mb-4 flex items-center text-gray-800">
                      <ClockCircleOutlined className="text-gray-500 mr-3" />
                      Operation Hours
                    </h4>
                    <div>
                      <p className="text-sm text-gray-500">Hours</p>
                      <p className="font-medium text-base text-gray-900 mt-1">
                        {airport.operation_hours ? (
                          <span>{airport.operation_hours}</span>
                        ) : (
                          "24/7"
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </Col>

              {/* Ground Transportation */}
              {airport.ground_transportation && (
                <Col span={24}>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-start">
                      <CarOutlined className="text-gray-500 text-2xl mr-4 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-xl text-gray-800 mb-2">
                          Ground Transportation
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          {airport.ground_transportation}
                        </p>
                        {airport.additional_info && (
                          <p className="text-sm text-gray-600 mt-3">
                            <span className="font-semibold">Note:</span>{" "}
                            {airport.additional_info}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </Col>
              )}
            </Row>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default AirportDetailsSection;
