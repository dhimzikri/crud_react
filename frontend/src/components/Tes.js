import React from 'react'

const Tes = () => {
    return (
        <div className="columns mt-5">
          <div className="column is-half">
            <form onSubmit={saveUser}>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Date</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="Date"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Type Transaksi</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={trx_type}
                      onChange={(e) => setTrx_type(e.target.value)}
                    >
                      <option value="fx">FX</option>
                      <option value="fxMon">FXMON</option>
                      <option value="midr">MMIDR</option>
                      <option value="fidrL">FIDR-LIAB</option>
                      <option value="fidrA">FIDR-ASSETS</option>
                      <option value="liquid">LIQUIDITY</option>
                      <option value="midr">GOLD</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">BBGfitID</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    value={BBGfitID}
                    onChange={(e) => setBBGfitID(e.target.value)}
                    placeholder="Bloomberg-ID"
                  />
                </div>
              </div>
              <div>
                <div className="field">
                  <label className="label">Mekanisme Transaksi</label>
                  <div className="control">
                    <div className="select is-fullwidth">
                      <select
                        value={mech_trx}
                        onChange={(e) => setMechT(e.target.value)}
                      >
                        <option value="DirectSOA">Direct SOA</option>
                        <option value="OMS">OMS</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">Note</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Notes"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Issues</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={issues}
                    onChange={(e) => setIssues(e.target.value)}
                    placeholder="Issues"
                  />
                </div>
              </div>
              <div>
                <div className="field">
                  <label className="label">Status</label>
                  <div className="control">
                    <div className="select is-fullwidth">
                      <select
                        value={status}
                        onChange={(e) => status(e.target.value)}
                      >
                        <option value="masuk">Masuk</option>
                        <option value="tidak_masuk">Tidak Masuk</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="field">
                <div className="control mt-4">
                  <button type="submit" className="button is-success">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
}

export default Tes