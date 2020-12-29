import React from 'react'

export default function QuotionForm() {
    return (
        <React.Fragment>
            <div className="col-md-4">
                <div className="card card-body">
                    <h4 className="title py-3">One Request, Multiple Quotes</h4>
                    <form>
                        <div className="form-group">
                            <input className="form-control" name placeholder="What are you looking for?" type="text" />
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <input className="form-control" placeholder="Quantity" name type="text" />
                                <select className="custom-select form-control">
                                    <option>Pieces</option>
                                    <option>Litres</option>
                                    <option>Tons</option>
                                    <option>Gramms</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group text-muted">
                            <p>Select template type:</p>
                            <label className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" defaultValue="option1" />
                                <span className="form-check-label">Request price</span>
                            </label>
                            <label className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" defaultValue="option2" />
                                <dspaniv className="form-check-label">Request a sample
</dspaniv></label>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-warning">Request for quote</button>
                        </div>
                    </form>
                </div>
            </div> {/* col // */}

        </React.Fragment>
    )
}
