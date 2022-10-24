const { Space, Input, Button, Layout, Card, Form, Col, Row, Select, Table, Menu, Modal } = antd;
const { Header, Content } = Layout;
const { EditOutlined, SketchOutlined, LeftOutlined } = icons;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Bàn 1', '1', <SketchOutlined />),
  getItem('Bàn 2', '2', <SketchOutlined />),
  getItem('Bàn 3', '3', <SketchOutlined />),
  getItem('Bàn 4', '4', <SketchOutlined />),
  getItem('Bàn 5', '5', <SketchOutlined />),
  getItem('Bàn 6', '6', <SketchOutlined />),
  getItem('Bàn 7', '7', <SketchOutlined />),
  getItem('Bàn 8', '8', <SketchOutlined />),

];
//==========================FUNCTION CACULATO TIME============================================

function diff(timeBatDau, timeKetThuc) {
  timeBatDau = timeBatDau.split(":");
  timeKetThuc = timeKetThuc.split(":");
  var startDate = new Date(0, 0, 0, timeBatDau[0], timeBatDau[1], 0);
  var endDate = new Date(0, 0, 0, timeKetThuc[0], timeKetThuc[1], 0);
  var diff = endDate.getTime() - startDate.getTime();
  var hours = Math.floor(diff / 1000 / 60 / 60);
  diff -= hours * 1000 * 60 * 60;
  var minutes = Math.floor(diff / 1000 / 60);
  return (hours < 9 ? "0" : "") + hours + ":" + (minutes < 9 ? "0" : "") + minutes;
}
//==========================
const FormTong = (a, hoatDong, tinhTien) => {
  const listMatHang = [
    {
      id: 1,
      tenSanPham: "Bia HUDA",
      donGia: "14.000 Đ"
    },
    {
      id: 2,
      tenSanPham: "Milk Coffee",
      donGia: "20.000 Đ"
    },
    {
      id: 3,
      tenSanPham: "Cappuccino",
      donGia: "75.000 Đ"
    },
    {
      id: 4,
      tenSanPham: "Orange Juice",
      donGia: "50.000 Đ"
    },
    {
      id: 5,
      tenSanPham: "Huda Beer",
      donGia: "20.000 Đ"
    },
  ]
  return (
    <div className="gx-sidebar-content">
      <Card className="th-card-margin-bottom">
        <Input.Group>
          <Row gutter={16} span={6} style={{ marginTop: -2 }}>
            <Col md={12} xs={24}>
              <Form.Item
                className='ant-input-group'
                label="Chọn mặt hàng"
                name='id'
              >
                <Select
                  className='input-item'
                >{listMatHang && listMatHang.map(value => (
                  <Option key={value.id}>{value.tenSanPham + ' - ' + value.donGia}</Option>
                ))}
                </Select>
              </Form.Item>
            </Col>
            <Col md={12} xs={24}>
              <Form.Item
                className='ant-input-group'
                label="Số lượng"
                name='soLuong'
              >
                <Input
                  className='input-item'
                  type='number'
                />
              </Form.Item>
            </Col>
          </Row>
        </Input.Group>
        <Row gutter={16} span={6} style={{ marginTop: 20, justifyContent :'center' }}>
          {!hoatDong &&
            <Button
              className='btn-back mr10'
              onClick={startClick}
            >
              <div className='content-btn'>
                <span className='icon-back' />
                <span className='name'><SketchOutlined /> Bắt đầu tính tiền</span>
              </div>
            </Button>
          }
          {hoatDong &&
            <Button
              className='btn-back mr10'
              onClick={tinhTien}
            >
              <div className='content-btn'>
                <span className='icon-back' />
                <span className='name'><SketchOutlined /> Tính tiền</span>
              </div>
            </Button>
          }
        </Row>
      </Card>
    </div>
  );
}
//==========================GET LIST============================================
function App() {
  const [current, setCurrent] = React.useState('1');
  const onClick = (e) => {
    setCurrent(e.key);
  };



  //===================================TIME BAT DAU====================================================
  const diff = (start, end) => {
    start = start.split(":");
    end = end.split(":");
    var startDate = new Date(0, 0, 0, start[0], start[1], 0);
    var endDate = new Date(0, 0, 0, end[0], end[1], 0);
    var diff = endDate.getTime() - startDate.getTime();
    var hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    var minutes = Math.floor(diff / 1000 / 60);
    return (hours < 9 ? "0" : "") + hours + ":" + (minutes < 9 ? "0" : "") + minutes;
  }
  //===================================================================================================
  const [sanPham, setSanPham] = React.useState('');
  const [timeBatDau, setTimeBatDau] = React.useState('');
  const [hoatDong, setHoatDong] = React.useState(false);
  const [listSanPham, setListSanPham] = React.useState([])
  const [dataTable, setDataTable] = React.useState([]);

  console.log(dataTable)
  React.useEffect(() => {
    getListSanPham()
  }, [])

  const getListSanPham = () => {
    const api_url = `https://635158723e9fa1244e5c4dc0.mockapi.io/api/listBan/${current}`;
    axios.get(api_url).then((data) => {
      setSanPham(data.data)
      setDataTable(data.data.listSanPham)
    }).catch()
  }

  const saveData = () => {
    const api_url = `https://635158723e9fa1244e5c4dc0.mockapi.io/api/listBan/${current}`;
    axios.put(api_url,
      {
        timeBatDau: timeBatDau
      });
  }

  const startClick = () => {
    setHoatDong(true)
    var currentdate = new Date();
    var timeBatDau = currentdate.getHours() + ':' + currentdate.getMinutes();
    setTimeBatDau(timeBatDau)
  }

  const setStateData = () => {
    const api_url = `https://635158723e9fa1244e5c4dc0.mockapi.io/api/listBan/${a.current}`;
    axios.put(api_url,
      {
        timeBatDau: timeBatDau,
        hoatDong: false,
        listSanPham: [],
        timeBatDau: '',
        timeKetThuc: '',
        totalTime: ''
      });
  }

  const confirmImport = () => {
    Modal.confirm({
      title: `Xác nhận tính tiền`,
      onOk() {
        saveData();
      },
      okText: 'Đồng ý',
      onCancel() { },
      cancelText: 'Bỏ qua'
    });
  }
  const tinhTien = () => {
    confirmImport()

  }
  const renderHead = [
    { title: 'STT', dataIndex: 'key', key: 'key', width: '5%', align: 'center' },
    { title: 'Tên mặt hàng', dataIndex: 'tenMatHang', key: 'tenMatHang' },
    { title: 'Số lượng', dataIndex: 'soLuong', key: 'soLuong' }
  ];
  return (
    <div className="container-content ant-layout-content" style={{ padding: 20 }}>
      <Form>
        <Card className="th-card-margin-bottom">
          <Input.Group>
            <Row gutter={16} span={6} style={{ marginTop: -2 }}>
              <Col md={6} xs={24}>
                <div className="gx-sidebar-content">
                  <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['1']}
                    mode="inline"
                    onClick={onClick}
                    theme="dark"
                    selectedKeys={[current]}
                    items={items}
                  />
                </div>
              </Col>
              <Col md={18} xs={24}>
                <FormTong current={current} hoatDong={hoatDong} tinhTien={tinhTien}/>
                <h3 style={{marginTop:20, textAlign: 'center', color:'red'  }}>DANH SÁCH MẶT HÀNG</h3>
                <Table
                  bordered
                  columns={renderHead}
                  className="qti-table-wrapper"
                  // dataSource={dataTable ? dataTable : []}
                  rowClassName={(record, index) => (index % 2 === 0 ? 'qti-table-row-background' : '')}
                  size="middle"
                  pagination={false}
                />
              </Col>
            </Row>
          </Input.Group>
          <Row gutter={16} span={6} style={{ marginTop: 20, justifyContent :'center' }}>
            <Button
              className='btn-back mr10'
              onClick={startClick}
            >
              <div className='content-btn'>
                <span className='icon-back' />
                <span className='name'><SketchOutlined /> Bắt đầu tính tiền</span>
              </div>
            </Button>
            <Button
              className='btn-back mr10'
              onClick={tinhTien}
            >
              <div className='content-btn'>
                <span className='icon-back' />
                <span className='name'><SketchOutlined /> Tính tiền</span>
              </div>
            </Button>
        </Row>
        </Card>
      </Form>
    </div>
  );
}

ReactDOM.render(<App />,
  document.querySelector('#root')
);