import React, { useState, useEffect, useCallback } from 'react';
import allCollegesData from '../../../data/colleges.json';
import initialFavoriteIds from '../../../data/favorites.json'; // Import initial favorites
import CollegeCard from '../../components/CollegeCard/CollegeCard';
import './CollegesPage.css';

const CollegesPage = () => {
    const [colleges, setColleges] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // State to track the IDs of favorited colleges
    const [favoriteIds, setFavoriteIds] = useState(initialFavoriteIds);

    const [uniqueLocations] = useState([...new Set(allCollegesData.map(c => c.location))]);
    const [uniqueCourses] = useState([...new Set(allCollegesData.map(c => c.course))]);

    const [filters, setFilters] = useState({
        location: '',
        course: '',
        minFee: '',
        maxFee: '',
        search: '',
        sort: '',
    });

    const applyFilters = useCallback(() => {
        setIsLoading(true);
        let filteredResult = [...allCollegesData];

        if (filters.search) {
            filteredResult = filteredResult.filter(c =>
                c.name.toLowerCase().includes(filters.search.toLowerCase())
            );
        }
        if (filters.location) {
            filteredResult = filteredResult.filter(c => c.location === filters.location);
        }
        if (filters.course) {
            filteredResult = filteredResult.filter(c => c.course === filters.course);
        }
        if (filters.minFee) {
            filteredResult = filteredResult.filter(c => c.fee >= parseInt(filters.minFee, 10));
        }
        if (filters.maxFee) {
            filteredResult = filteredResult.filter(c => c.fee <= parseInt(filters.maxFee, 10));
        }
        if (filters.sort === 'asc') {
            filteredResult.sort((a, b) => a.fee - b.fee);
        }
        if (filters.sort === 'desc') {
            filteredResult.sort((a, b) => b.fee - b.fee);
        }

        setTimeout(() => {
            setColleges(filteredResult);
            setIsLoading(false);
        }, 300);

    }, [filters]);

    useEffect(() => {
        applyFilters();
    }, [applyFilters]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    // This function now updates the local `favoriteIds` state directly.
    const handleAddToFavorites = (collegeToAdd) => {
        // Add the new college's ID to the state if it's not already there
        if (!favoriteIds.includes(collegeToAdd.id)) {
            setFavoriteIds(currentIds => [...currentIds, collegeToAdd.id]);
            // No alert is needed, the button changing state is better feedback.
        }
    };

    return (
        <div className="colleges-page-container">
            <aside className="filter-bar">
                <h2 className="filter-title">Filters</h2>
                <div className="filter-group">
                    <label htmlFor="search">Search by Name</label>
                    <input
                        type="search"
                        id="search"
                        name="search"
                        placeholder="e.g., ABC Engineering"
                        value={filters.search}
                        onChange={handleFilterChange}
                    />
                </div>
                <div className="filter-group">
                    <label htmlFor="location">Location</label>
                    <select id="location" name="location" value={filters.location} onChange={handleFilterChange}>
                        <option value="">All Locations</option>
                        {uniqueLocations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                    </select>
                </div>
                <div className="filter-group">
                    <label htmlFor="course">Course</label>
                    <select id="course" name="course" value={filters.course} onChange={handleFilterChange}>
                        <option value="">All Courses</option>
                        {uniqueCourses.map(course => <option key={course} value={course}>{course}</option>)}
                    </select>
                </div>
                <div className="filter-group">
                    <label>Fee Range (Annual)</label>
                    <div className="fee-inputs">
                        <input
                            type="number"
                            name="minFee"
                            placeholder="Min"
                            value={filters.minFee}
                            onChange={handleFilterChange}
                            step="10000"
                        />
                        <input
                            type="number"
                            name="maxFee"
                            placeholder="Max"
                            value={filters.maxFee}
                            onChange={handleFilterChange}
                            step="10000"
                        />
                    </div>
                </div>
                <div className="filter-group">
                    <label htmlFor="sort">Sort by Fee</label>
                    <select id="sort" name="sort" value={filters.sort} onChange={handleFilterChange}>
                        <option value="">Default</option>
                        <option value="asc">Low to High</option>
                        <option value="desc">High to Low</option>
                    </select>
                </div>
            </aside>

            <main className="colleges-content">
                {isLoading ? (
                    <div className="loader"></div>
                ) : colleges.length > 0 ? (
                    <div className="colleges-grid">
                        {colleges.map(college => (
                            <CollegeCard
                                key={college.id}
                                college={college}
                                onAddToFavorites={handleAddToFavorites}
                                // Pass a boolean to the card indicating if it's already a favorite
                                isFavorite={favoriteIds.includes(college.id)}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="no-results-message">No colleges found matching your criteria. Try adjusting your filters.</p>
                )}
            </main>
        </div>
    );
};

export default CollegesPage;